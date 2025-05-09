"use server";
import { getServerUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { TaskStatus } from "@/lib/generated/prisma";

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

type TaskWithLogCount = {
  id: number;
  title: string;
  description: string | null;
  status: TaskStatus;
  timeSpent: number;
  activityCount:number
}
export async function getAllTasksWithLogCount() {
  try {
    const user = await getServerUser();
    if (!user) {
      throw new Error("User not found");
    }
    const taskPromise =db.tasks.findMany({
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
    const timeSpentPromise = db.taskLog.groupBy({
      by:["taskId","userId"],
      _sum: {
        duration: true,
      },
      where: {
        userId: parseInt(user.user.id),
      },
    });
    const [taskList, timeSpent] = await Promise.all([taskPromise, timeSpentPromise]);
    const tasks:TaskWithLogCount[] =[]
    for (const task of taskList) {
      const taskTimeSpent = timeSpent.find(
        (item) => item.taskId === task.id
      );
      tasks.push({
        ...task,
        timeSpent: taskTimeSpent ? Number(taskTimeSpent._sum.duration) : 0,
        activityCount: task._count.taskLogs
      })
    }
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
