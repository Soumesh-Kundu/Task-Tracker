import TaskCard from "@/components/Task/Card"
import { getAllTasks } from "../_actions"

export default async function Page(){
    const {tasks,status}=await getAllTasks()
    if(!status)
    {
        return <div className="grid place-items-center h-dvh w-screen">
            <h1 className="text-2xl font-medium">No tasks found</h1>
        </div>
    }
    return <>
        <main className="grid grid-cols-1 sm:grid-cols-2 md:max-w-5xl lg:max-w-6xl mx-auto p-2 mt-3 lg:grid-cols-3 2xl:max-w-7xl  gap-5 ">
            {
                tasks.map(task=>{
                    return <TaskCard key={task.id} task={task}/>
                })
            }
        </main>
    </>
}