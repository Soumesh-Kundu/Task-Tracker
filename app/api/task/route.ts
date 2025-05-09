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
      orderBy: {
        id: "desc",
      },
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
