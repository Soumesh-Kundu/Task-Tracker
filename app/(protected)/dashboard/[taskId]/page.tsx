import { getTaskDetailsById } from "@/app/_actions";
import DeleteActivityButton from "@/components/ActivityLog/deleteActivity";
import { formatTimeString } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function page({
  params,
}: {
  params: Promise<{ taskId:string }>;
}) {
  try {
    const taskID = parseInt((await params).taskId);
    const { task } = await getTaskDetailsById(taskID);
    if (!task) {
      throw new Error("Task not found");
    }
    const textColor = {
      PENDING: "!text-orange-700",
      IN_PROGRESS: "!text-amber-500",
      COMPLETED: "!text-green-600",
    };
    const taskStatusRender = {
      PENDING: "Pending",
      IN_PROGRESS: "In Progress",
      COMPLETED: "Completed",
    };
  

    return (
      <div className="flex flex-col gap-3 w-full h-full ">
        <Link href="/dashboard" className="flex items-center gap-2 text-gray-700 font-semibold hover:text-gray-900 transition duration-200 cursor-pointer">
          <ArrowLeft /> Back
        </Link>
        {/* Task Header */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{task.title}</h2>
              <p className="text-gray-600 mt-1">{task.description}</p>
            </div>
            <span className={`font-semibold  ${textColor[task.status]}`}>
              {taskStatusRender[task.status]}
            </span>
          </div>
        </div>

        {/* Task Logs Header */}
        <div className="text-lg font-semibold text-gray-700">Activity Logs</div>

        {/* Task Logs List */}
        <div className="space-y-1 overflow-y-auto flex-grow min-h-0">
          {task.taskLogs.length > 0 ? (
            task.taskLogs.map((log) => (
              <div
                key={log.id}
                className="bg-white shadow-sm rounded-md p-4 border border-gray-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold">
                      {new Date(log.createdAt).toLocaleString()}
                    </p>
                    <p className="text-gray-700  font-medium">
                      Duration: {formatTimeString(Number(log.duration))}
                    </p>
                  </div>
                  <DeleteActivityButton taskId={taskID} logId={log.id} />
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No activity logs available.</p>
          )}
        </div>
      </div>
    );
  } catch (err) {
    return <div className="w-full">Error</div>;
  }
}
