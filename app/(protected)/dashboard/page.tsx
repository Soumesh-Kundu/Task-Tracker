import { getAllTasks, getAllTasksWithLogCount } from "@/app/_actions";
import Link from "next/link";

export default async function Page() {
  const { tasks, status } = await getAllTasksWithLogCount();
  if (!status) {
    return <div className="text-center text-2xl font-bold">No Tasks Found</div>;
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
    <>
      <div className="w-full h-full flex flex-col ">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Tasks</h3>
        <div className="flex flex-col gap-4 flex-grow  min-h-0 sm:overflow-y-auto">
          {tasks.map((task) => (
            <Link
              href={`/dashboard/${task.id}`}
              key={task.id}
              className="bg-white shadow-md rounded-xl duration-200 p-4 border border-gray-100 hover:shadow-lg transition  space-y-2"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-800">
                  {task.title}
                </h2>
                <div className="flex items-center gap-1">
                  <span className={` font-medium ${textColor[task.status]}`}>
                    {taskStatusRender[task.status]}
                  </span>
                </div>
              </div>
              <p className="text-gray-500 text-sm">{task.description}</p>
              <p className="text-sm text-gray-700 font-medium">
                Total Activity Logs:{" "}
                <span className="text-black">{task._count.taskLogs}</span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
