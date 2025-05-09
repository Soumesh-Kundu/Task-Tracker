import { NextRequest, NextResponse } from "next/server";
import { getServerUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { Prisma } from "@/lib/generated/prisma";

export async function DELETE(
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
      return NextResponse.json({ error: "User not found", status: false }, { status: 401 });
    }

    const activity = await db.taskLog.delete({
      where: {
        taskId: parseInt((await params).taskId),
        id: parseInt((await params).activityId),
        userId: parseInt(user.user.id),
      },
    });

    return NextResponse.json({ activityId: activity.id, status: true });
  } catch (error) {
    console.error(error);

    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return NextResponse.json({ error: "Task not found", status: false }, { status: 404 });
    }

    return NextResponse.json({ error: "Something went wrong", status: false }, { status: 500 });
  }
}
