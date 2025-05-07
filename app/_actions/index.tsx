"use server";

import { getServerUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { Prisma, TaskStatus } from "@/lib/generated/prisma";

export function getTasks() {}

export async function addTask({
  title,
  description,
  status,
}: {
  title: string;
  description: string;
  status: TaskStatus;
}) {
    try{
        const user = await getServerUser();
        if (!user) {
            throw new Error("User not found");
        }
        await db.tasks.create({
            data: {
                title,
                description,
                status,
                user: {
                    connect: {
                        id: parseInt(user.user.id),
                    },
                },
            },
        });
        return { message: "Task created successfully", status: true };
    }
    catch(error){
        console.log(error);
        return {error: "Something went wrong",status:false}
    }
}

export async function editTask({id,updates}:{id:number,updates:{key:"title"|"description"|"status",value:string | TaskStatus}[]}){
    try{
        const user = await getServerUser();
        if (!user) {
            throw new Error("User not found");
        }
        const updatesObj:{[key:string]:any} = {}
        updates.forEach((update)=>{
            updatesObj[update.key] = update.value
        })
        await db.tasks.update({
            where:{
                id
            },
            data:updatesObj
        })
        return {message:"Task updated successfully",status:true}
    }catch(error){
        console.log(error);
        if(error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025"){
            return {error: "Task not found",status:false}
        }
        return {error: "Something went wrong",status:false}
    }
}

export async function deleteTask(id:number){
    try{
        const user = await getServerUser();
        if (!user) {
            throw new Error("User not found");
        }
        await db.tasks.delete({
            where:{
                id
            }
        })
        return {message:"Task deleted successfully",status:true}
    }catch(error){
        console.log(error);
        if(error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025"){
            return {error: "Task not found",status:false}
        }
        return {error: "Something went wrong",status:false}
    }
}
export async function addActivityLog({id,duration}:{id:number,duration:number}){
    try{
        const user = await getServerUser();
        if (!user) {
            throw new Error("User not found");
        }
        await db.taskLog.create({
            data:{
                duration,
                task:{
                    connect:{
                        id
                    }
                },
                user:{
                    connect:{
                        id:parseInt(user.user.id)
                    }
                }
            }
        })
        return {message:"Activity log created successfully",status:true}
    }catch(error){
        console.log(error);
        if(error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025"){
            return {error: "Task not found",status:false}
        }
        return {error: "Something went wrong",status:false}
    }
}

export async function getAllTasks(){
    try{
        const user = await getServerUser();
        if (!user) {
            throw new Error("User not found");
        }
        const tasks = await db.tasks.findMany({
            where:{
                user:{
                    id:parseInt(user.user.id)
                }
            },
            select:{
                id:true,
                title:true,
                description:true,
                status:true,
            }
        })
        return {tasks,status:true}
    }catch(error){
        console.log(error);
        return {error: "Something went wrong",status:false}
    }
}