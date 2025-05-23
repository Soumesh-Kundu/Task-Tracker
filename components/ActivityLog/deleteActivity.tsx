"use client";
import { deleteActivityLog } from "@/lib/api/tasklog";
import ConfimationBox from "../ConfimationBox";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DeleteActivityButton({
  taskId,
  logId,
}: {
  taskId: number;
  logId: number;
}) {
  const router=useRouter();
  return (
    <ConfimationBox
      onYes={async () => {
        await deleteActivityLog(taskId, logId);
        router.refresh();
      }}
      message="Are you sure you want to delete this activity log?"
    >
      <button
        type="button"
        className="cursor-pointer p-2 rounded-full flex items-center justify-center border border-red-500 bg-red-500 text-white sm:bg-white sm:text-red-500 hover:bg-red-500 hover:text-white transition-all duration-200 ease-in-out "
      >
        <Trash2 size={20} />{" "}
      </button>
    </ConfimationBox>
  );
}
