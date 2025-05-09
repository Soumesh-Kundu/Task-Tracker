import { NextRequest, NextResponse } from "next/server";
import { getServerUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { Prisma, TaskStatus } from "@/lib/generated/prisma";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getServerUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized User", status: false }, { status: 401 });
    }

    const { status } = await req.json();
    if (!status) {
      return NextResponse.json({ error: "Status is required", status: false }, { status: 400 });
    }

    const updated = await db.tasks.update({
      where: {
        id: parseInt(params.id),
        userId: parseInt(user.user.id),
      },
      data: {
        status: status as TaskStatus,
      },
    });

    return NextResponse.json({ message: "Task updated successfully", status: true });
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
