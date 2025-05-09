import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { db } from "@/lib/db";
export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  if (!email || !password) {
    return NextResponse.json(
      {
        message: "Email and Password are required",
        success: false,
      },
      { status: 400 }
    );
  }
  try {
    const hashPassword = await hash(password, 10);
    const user = await db.users.create({
      data: {
        email,
        password: hashPassword,
      },
    });
    return NextResponse.json(
      {
        message: "User created successfully",
        success: true,
      },
      { status: 201 }
    );
  } catch (error: any) {
    if (
      error.code === "P2002"
    ) {
      return NextResponse.json(
        {
          message: "User already exists",
          success: false,
        },
        { status: 409 }
      );
    }
    return NextResponse.json(
      {
        message: "Internal server error",
        success: false,
      },
      { status: 500 }
    );
  }
}
