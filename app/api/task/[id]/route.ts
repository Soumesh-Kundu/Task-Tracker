import { NextRequest, NextResponse } from "next/server";
import { getServerUser } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getServerUser();
    if (!user) {
      return NextResponse.json(
        { task: null, error: "User not authenticated", status: false },
        { status: 401 }
      );
    }

    const taskId = parseInt((await params).id);
    if (isNaN(taskId)) {
      return NextResponse.json(
        { task: null, error: "Invalid task ID", status: false },
        { status: 400 }
      );
    }

    const task = await db.tasks.findFirst({
      where: {
        id: taskId,
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

    return NextResponse.json({ task, error: null, status: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { task: null, error: "Something went wrong", status: false },
      { status: 500 }
    );
  }
}
