import { NextRequest, NextResponse } from "next/server";
import { getServerUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { Prisma } from "@/lib/generated/prisma";
import { revalidatePath } from "next/cache";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getServerUser();
    if (!user) {
      return NextResponse.json(
        { error: "User not authenticated", status: false },
        { status: 401 }
      );
    }

    const id = parseInt(params.id);
    if (isNaN(id)) {
      return NextResponse.json(
        { error: "Invalid task ID", status: false },
        { status: 400 }
      );
    }

    await db.tasks.delete({
      where: { id },
    });

    revalidatePath("/", "page");

    return NextResponse.json({
      message: "Task deleted successfully",
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
