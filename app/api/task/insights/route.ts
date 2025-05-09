import { NextRequest, NextResponse } from "next/server";
import { getServerUser } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const user = await getServerUser();
    if (!user) {
      return NextResponse.json(
        { data: {}, timeElapsed: 0, error: "User not authenticated", status: false },
        { status: 401 }
      );
    }

    const userId = parseInt(user.user.id);

    const taskGroupCountPromise = db.tasks.groupBy({
      by: ["status"],
      where: { userId },
      _count: { _all: true },
    });

    const timeElapsedPromise = db.taskLog.aggregate({
      _sum: {
        duration: true,
      },
      where: {
        userId,
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

    const totalTimeSpent = timeElapsed._sum.duration || 0;

    return NextResponse.json({
      data,
      timeElapsed: totalTimeSpent,
      error: null,
      status: true,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { data: {}, timeElapsed: 0, error: "Something went wrong", status: false },
      { status: 500 }
    );
  }
}
