"use server";

import { askAI } from "@/lib/ai";
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
    revalidatePath("/");
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
    revalidatePath("/", "page");
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
    const res = await db.tasks.update({
      where: {
        id,
        userId: parseInt(user.user.id),
      },
      data: {
        status,
      },
    });
    revalidatePath("/", "page");
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
    revalidatePath("/", "page");
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
export async function upsertActivityLog(
  taskId: number,
  activityId: number,
  duration: number = 0
) {
  try {
    const user = await getServerUser();
    if (!user) {
      throw new Error("User not found");
    }
    const activity = await db.taskLog.upsert({
      where: {
        taskId,
        id: activityId,
        userId: parseInt(user.user.id),
      },
      update: {
        duration,
      },
      create: {
        duration,
        task: {
          connect: {
            id: taskId,
          },
        },
        user: {
          connect: {
            id: parseInt(user.user.id),
          },
        },
      },
      select: {
        id: true,
      },
    });
    return { activityId: activity.id, status: true };
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

export async function deleteActivityLog(taskId: number, activityId: number) {
  try {
    const user = await getServerUser();
    if (!user) {
      throw new Error("User not found");
    }
    await db.taskLog.delete({
      where: {
        id: activityId,
        taskId,
        userId: parseInt(user.user.id),
      },
    });
    revalidatePath("/dashboard/[id]", "page");
    return { message: "Activity log deleted successfully", status: true };
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
      orderBy: { id: "desc" },
    });
    return { tasks, error: null, status: true };
  } catch (error) {
    console.log(error);
    return { tasks: [], error: "Something went wrong", status: false };
  }
}

export async function getAllTasksWithLogCount() {
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
        _count: {
          select: {
            taskLogs: true,
          },
        },
      },
      orderBy: { id: "desc" },
    });
    return { tasks, error: null, status: true };
  } catch (error) {
    console.log(error);
    return { tasks: [], error: "Something went wrong", status: false };
  }
}

export async function getInsights() {
  try {
    const user = await getServerUser();
    if (!user) {
      throw new Error("User not found");
    }
    const taskGroupCountPromise = await db.tasks.groupBy({
      by: ["status"],
      where: {
        userId: parseInt(user.user.id),
      },
      _count: {
        _all: true,
      },
    });
    const timeElapsedPromise = db.taskLog.aggregate({
      _sum: {
        duration: true,
      },
      where: {
        userId: parseInt(user.user.id),
        createdAt: {
          gte: new Date(new Date().setHours(0, 0, 0, 0)),
          lte: new Date(new Date().setHours(23, 59, 59, 999)),
        },
      },
    });
    const [taskGroupCount, timeElapsed] = await Promise.all([
      taskGroupCountPromise,
      timeElapsedPromise,
    ]);

    const data = taskGroupCount.reduce<Record<string, number>>((acc, item) => {
      acc[item.status] = item._count._all;
      return acc;
    }, {});
    const totalTimeSpent = timeElapsed._sum.duration;
    // console.dir(taskGroupCount, { depth: 5 });
    return { data, timeElapsed: totalTimeSpent, error: null, status: true };
  } catch (error) {
    console.log(error);
    return { tasks: [], error: "Something went wrong", status: false };
  }
}

export async function getTaskDetailsById(id: number) {
  try {
    const user = await getServerUser();
    if (!user) {
      throw new Error("User not found");
    }
    const task = await db.tasks.findFirst({
      where: {
        id,
        userId: parseInt(user.user.id),
      },
      select: {
        id: true,
        title: true,
        description: true,
        status: true,
        taskLogs: {
          select: {
            id: true,
            duration: true,
            createdAt: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });
    return { task, error: null, status: true };
  } catch (error) {
    console.log(error);
    return { task: null, error: "Something went wrong", status: false };
  }
}
