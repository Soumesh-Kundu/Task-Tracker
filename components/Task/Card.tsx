"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { TaskStatus } from "@/lib/generated/prisma";
import { Circle, CircleStop, Pause, PencilLine, Play,  Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { setData, setModalOpen } from "@/lib/store/slice/taskModal";
import ConfimationBox from "../ConfimationBox";
import { deleteTask, updateTaskStatus } from "@/lib/api/task";
import { upsertActivityLog } from "@/lib/api/tasklog";
import { useRouter } from "next/navigation";
import {Ring} from 'ldrs/react'
import "ldrs/react/Ring.css"
type props = {
  task: {
    id: number;
    title: string;
    description: string | null;
    status: "PENDING" | "IN_PROGRESS" | "COMPLETED";
  };
};

export default function TaskCard({ task }: props) {
  const [currentStatus, setCurrentStatus] = useState(task.status);
  const [currentActivityLogId, setCurrentActivityLogId] = useState<number>(0);
  const previousStatus = useRef<TaskStatus>(task.status);
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const router=useRouter();
  const currentTimerInstance = useRef<NodeJS.Timeout | null>(null);
  const dispatch = useDispatch();

  const textColor = {
    PENDING: "!text-orange-700",
    IN_PROGRESS: "!text-amber-500",
    COMPLETED: "!text-green-600",
  };
  const timeString = useMemo(() => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    let currTime = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
    if (timer >= 3600) {
      const hours = Math.floor(timer / 3600);
      currTime = `${hours.toString().padStart(2, "0")}:${currTime}`;
    }
    return currTime;
  }, [timer]);

  async function toggleTimer() {
    if (!isRunning) {
      setIsRunning(true);
      setIsPaused(false);
      if (currentStatus === "PENDING") {
        setCurrentStatus("IN_PROGRESS");
      }
      currentTimerInstance.current = setInterval(() => {
        if(isPaused || isLoading) return
        setTimer((prev) => prev + 1);
      }, 1000);
      const res = await upsertActivityLog(task.id, currentActivityLogId);
      if (res.status) {
        setCurrentActivityLogId(res.activityId!);
      }
      return;
    }
    if (isPaused) {
      setIsPaused(false);
      currentTimerInstance.current = setInterval(() => {
        if(isPaused || isLoading) return
        setTimer((prev) => prev + 1);
      }, 1000);
    } else {
      setIsPaused(true);
      if (currentTimerInstance.current) {
        clearInterval(currentTimerInstance.current);
        currentTimerInstance.current = null;
      }
      const res = await upsertActivityLog(task.id, currentActivityLogId, timer);
      if (res.status) {
        setCurrentActivityLogId(res.activityId!);
      }
    }
  }
  async function stopTimer() {
    if (currentTimerInstance.current) {
      clearInterval(currentTimerInstance.current);
      currentTimerInstance.current = null;
    }
    setIsLoading(true);
    const res = await upsertActivityLog(task.id, currentActivityLogId, timer);
    if (res.status) {
      setCurrentActivityLogId(0);
    }
    setIsLoading(false);
    setIsRunning(false);
    setIsPaused(false);
    setTimer(0);
  }
  function handleEdit() {
    dispatch(
      setData({ title: task.title, description: task.description, id: task.id })
    );
    dispatch(setModalOpen(true));
  }

  async function handleUpdateStatus() {
    try {
      const res = await updateTaskStatus(task.id, currentStatus);
      if (res.status) {
        previousStatus.current = currentStatus;
      }
    } catch (error) {
      console.error("Error updating status:", error);
      setCurrentStatus(previousStatus.current);
    }
  }
  async function handleDelete() {
    try {
      const res = await deleteTask(task.id);
      if(res.status){
        router.refresh();
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  }
  useEffect(() => {
    if (currentStatus !== previousStatus.current) {
      handleUpdateStatus();
    }
  }, [currentStatus]);
  return (
    <div className="bg-white shadow-md rounded-lg p-3 flex flex-col gap-2 min-h-40 max-h-60">
      <div className="flex-grow">
        <div className="flex items-start justify-between mb-2">
          <h1 className="text-lg font-medium flex-grow break-words text-wrap mt-1">
            {task.title}
          </h1>
          <Select
            value={currentStatus}
            onValueChange={(value) => {
              setCurrentStatus(value as TaskStatus);
            }}
          >
            <SelectTrigger
              className={`font-[500] w-[120px] ${textColor[currentStatus]} `}
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                value="PENDING"
                defaultChecked={task.status === "PENDING"}
                className="font-[500] !text-orange-700"
              >
                Pending
              </SelectItem>
              <SelectItem
                value="IN_PROGRESS"
                defaultChecked={task.status === "IN_PROGRESS"}
                className="font-[500] !text-amber-500"
              >
                In Progress
              </SelectItem>
              <SelectItem
                value="COMPLETED"
                defaultChecked={task.status === "COMPLETED"}
                className="font-[500] !text-green-600"
              >
                Completed
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <p className="text-sm break-words text-wrap text-slate-500">
          {task.description}
        </p>
      </div>
      <div className="flex items-center justify-between ">
        <div className="flex items-center  gap-2">
          {currentStatus !== "COMPLETED" && (
            <>
              <Button
                className={`rounded-lg ${
                  !isRunning
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-yellow-500 hover:bg-yellow-600 text-white"
                }  transition-all duration-200 text-white`}
                onClick={toggleTimer}
              >
                {isPaused || !isRunning ? (
                  <Play fill="white" />
                ) : (
                  <Pause fill="white" />
                )}
                {isRunning || isPaused ? timeString : "Start"}
              </Button>
              {isRunning && (
                <Button
                  onClick={stopTimer}
                  className="rounded-lg bg-red-500 hover:bg-red-600 text-white"
                >
                  {
                    isLoading?
                    <Ring size={20} color="white" stroke={1.5}/>:
                    <CircleStop   />
                  }
                </Button>
              )}
            </>
          )}
        </div>
        <div className="flex gap-2 justify-self-end">
          {currentStatus!=="COMPLETED"&& <button
            type="button"
            onClick={handleEdit}
            className="cursor-pointer p-2 rounded-full flex items-center justify-center border border-orange-500 bg-orange-500 text-white sm:bg-white sm:text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-200 ease-in-out "
          >
            <PencilLine size={20} />{" "}
          </button>}
          <ConfimationBox onYes={handleDelete} message="This action cannot be undone and all the activity log will be lost.">
            <button
              type="button"
              className="cursor-pointer p-2 rounded-full flex items-center justify-center border border-red-500 bg-red-500 sm:bg-white text-white sm:text-red-500 hover:bg-red-500 hover:text-white transition-all duration-200 ease-in-out "
            >
              <Trash2 size={20} />{" "}
            </button>
          </ConfimationBox>
        </div>
      </div>
    </div>
  );
}
