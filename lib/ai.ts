import { google as GenAi } from "@ai-sdk/google";
import { generateText } from "ai";

const chatModel = GenAi("gemini-2.0-flash-001");

export async function askAI(prompt:string){
    const res= await generateText({
        model: chatModel,
        prompt,
    })
    return res.text;
}