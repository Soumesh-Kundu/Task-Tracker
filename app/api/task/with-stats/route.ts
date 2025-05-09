import { NextResponse } from "next/server";
import { getServerUser } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const user = await getServerUser();
    if (!user) {
      return NextResponse.json(
        { tasks: [], error: "User not authenticated", status: false },
        { status: 401 }
      );
    }

    const userId = parseInt(user.user.id);

    const taskPromise = db.tasks.findMany({
      where: {
        user: {
          id: userId,
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
      by: ["taskId", "userId"],
      _sum: {
        duration: true,
      },
      where: {
        userId,
      },
    });

    const [taskList, timeSpent] = await Promise.all([taskPromise, timeSpentPromise]);

    const tasks = taskList.map(task => {
      const timeData = timeSpent.find(item => item.taskId === task.id);
      return {
        id: task.id,
        title: task.title,
        description: task.description,
        status: task.status,
        activityCount: task._count.taskLogs,
        timeSpent: timeData ? Number(timeData._sum.duration ?? 0) : 0,
      };
    });

    return NextResponse.json({ tasks, error: null, status: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { tasks: [], error: "Something went wrong", status: false },
      { status: 500 }
    );
  }
}
