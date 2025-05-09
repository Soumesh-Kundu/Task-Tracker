import { NextRequest, NextResponse } from "next/server";
import { getServerUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { TaskStatus } from "@/lib/generated/prisma";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    const user = await getServerUser();
    if (!user) {
      return NextResponse.json(
        { error: "User not authenticated", status: false },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { title, description } = body;

    if (!title || !description) {
      return NextResponse.json(
        { error: "Missing title or description", status: false },
        { status: 400 }
      );
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

    return NextResponse.json({
      message: "Task created successfully",
      status: true,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong", status: false },
      { status: 500 }
    );
  }
}
