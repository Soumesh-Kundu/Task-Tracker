"use server";

import { getServerUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { Prisma, TaskStatus } from "@/lib/generated/prisma";
import { revalidatePath } from "next/cache";


export async function addTask({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  try {
    const user = await getServerUser();
    if (!user) {
      throw new Error("User not found");
    }
    await db.tasks.create({
      data: {
        title,
        description,
        status: TaskStatus.PENDING,
        user: {
          connect: {
            id: parseInt(user.user.id),
          },
        },
      },
    });
    revalidatePath("/")
    return { message: "Task created successfully", status: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong", status: false };
  }
}

export async function editTask({
  id,
  updates,
}: {
  id: number;
  updates: {
    title: string;
    description: string;
  };
}) {
  try {
    const user = await getServerUser();
    if (!user) {
      throw new Error("User not found");
    }
    await db.tasks.update({
      where: {
        id,
      },
      data: updates,
    });
    revalidatePath("/","page")
    return { message: "Task updated successfully", status: true };
  } catch (error) {
    console.log(error);
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return { error: "Task not found", status: false };
    }
    return { error: "Something went wrong", status: false };
  }
}
export async function updateTaskStatus({
  id,
  status,
}: {
  id: number;
  status: TaskStatus;
}) {
  try {
    const user = await getServerUser();
    if (!user) {
      throw new Error("User not found");
    }
    const res=await db.tasks.update({
      where: {
        id,
        userId: parseInt(user.user.id),
      },
      data: {
        status,
      },
    });
    revalidatePath("/","page")
    return { message: "Task updated successfully", status: true };
  } catch (error) {
    console.log(error);
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return { error: "Task not found", status: false };
    }
    return { error: "Something went wrong", status: false };
  }
}


export async function deleteTask(id: number) {
  try {
    const user = await getServerUser();
    if (!user) {
      throw new Error("User not found");
    }
    await db.tasks.delete({
      where: {
        id,
      },
    });
    revalidatePath("/","page")
    return { message: "Task deleted successfully", status: true };
  } catch (error) {
    console.log(error);
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return { error: "Task not found", status: false };
    }
    return { error: "Something went wrong", status: false };
  }
}
export async function addActivityLog({
  id,
  duration,
}: {
  id: number;
  duration: number;
}) {
  try {
    const user = await getServerUser();
    if (!user) {
      throw new Error("User not found");
    }
    await db.taskLog.create({
      data: {
        duration,
        task: {
          connect: {
            id,
          },
        },
        user: {
          connect: {
            id: parseInt(user.user.id),
          },
        },
      },
    });
    return { message: "Activity log created successfully", status: true };
  } catch (error) {
    console.log(error);
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return { error: "Task not found", status: false };
    }
    return { error: "Something went wrong", status: false };
  }
}

export async function getAllTasks() {
  try {
    const user = await getServerUser();
    if (!user) {
      throw new Error("User not found");
    }
    const tasks = await db.tasks.findMany({
      where: {
        user: {
          id: parseInt(user.user.id),
        },
      },
      select: {
        id: true,
        title: true,
        description: true,
        status: true,
      },
      orderBy:{id:"desc"}
    });
    return { tasks,error:null, status: true };
  } catch (error) {
    console.log(error);
    return {tasks:[], error: "Something went wrong", status: false };
  }
}
