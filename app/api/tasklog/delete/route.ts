import { NextRequest, NextResponse } from "next/server";
import { getServerUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { Prisma } from "@/lib/generated/prisma";
import { revalidatePath } from "next/cache";

export async function DELETE(req: NextRequest) {
  try {
    const user = await getServerUser();
    if (!user) {
      return NextResponse.json(
        { error: "User not authenticated", status: false },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(req.url);
    const taskId = parseInt(searchParams.get("taskId") || "");
    const activityId = parseInt(searchParams.get("activityId") || "");

    if (isNaN(taskId) || isNaN(activityId)) {
      return NextResponse.json(
        { error: "Invalid taskId or activityId", status: false },
        { status: 400 }
      );
    }

    await db.taskLog.delete({
      where: {
        id: activityId,
        taskId,
        userId: parseInt(user.user.id),
      },
    });

    revalidatePath("/dashboard/[id]", "page");

    return NextResponse.json({
      message: "Activity log deleted successfully",
      status: true,
    });
  } catch (error) {
    console.error(error);
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return NextResponse.json(
        { error: "Activity log not found", status: false },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { error: "Something went wrong", status: false },
      { status: 500 }
    );
  }
}
