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
        <main className="grid  w-full max-w-6xl mx-auto p-2 mt-3 grid-cols-3  gap-5 ">
            {
                tasks.map(task=>{
                    return <TaskCard key={task.id} task={task}/>
                })
            }
        </main>
    </>
}