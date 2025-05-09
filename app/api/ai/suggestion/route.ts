import { NextRequest, NextResponse } from "next/server";
import { askAI } from "@/lib/ai"; // This should point to your Gemini/Vercel AI wrapper
import { getServerUser } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const user = await getServerUser();
    if (!user) {
      return NextResponse.json(
        { status: false, error: "Unauthorized User" },
        { status: 401 }
      );
    }
    const { input } = await req.json();

    const prompt = `
    You are a task assistant.

    Take the user input below and return:
    1. A concise and professional task title but not too much alter the context.
    2. A short, clear task description - only the action needed, no extra guidance or context.

    ⚠️ Response MUST be a single line, stringified JSON object.
    Do NOT include markdown, code blocks, or any additional commentary.

    Example format:
    {"title":"...", "description":"..."}

    User input: "${input}"
    `.trim();
    const response = await askAI(prompt);
    console.log("response", response);
    const { title: taskTitle, description: taskDescription } =
      JSON.parse(response);

    return NextResponse.json({
      status: true,
      title: taskTitle,
      description: taskDescription,
    });
  } catch (err) {
    console.error("AI suggestion error:", err);
    return NextResponse.json(
      { status: false, error: "AI generation failed" },
      { status: 500 }
    );
  }
}
