import { NextRequest, NextResponse } from "next/server";
import { getServerUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { Prisma } from "@/lib/generated/prisma";

export async function PATCH(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      taskId: string;
      activityId: string;
    }>;
  }
) {
  try {
    const user = await getServerUser();
    if (!user) {
      return NextResponse.json(
        { error: "User not authenticated", status: false },
        { status: 401 }
      );
    }

    const { duration = 0 } = await req.json();

    const taskId = parseInt((await params).taskId);
    const activityId = parseInt((await params).activityId);

    if (isNaN(taskId) || isNaN(activityId)) {
      return NextResponse.json(
        { error: "Invalid taskId or activityId", status: false },
        { status: 400 }
      );
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
          connect: { id: taskId },
        },
        user: {
          connect: { id: parseInt(user.user.id) },
        },
      },
      select: {
        id: true,
      },
    });

    return NextResponse.json({
      activityId: activity.id,
      status: true,
    });
  } catch (error) {
    console.error(error);
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return NextResponse.json(
        { error: "Task not found", status: false },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: "Something went wrong", status: false },
      { status: 500 }
    );
  }
}
