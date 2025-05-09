import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTimeString(time: number) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  let currTime = `${seconds.toString().padStart(2, "0")} sec`;
  if (minutes > 0) {
    currTime = `${minutes.toString().padStart(2, "0")} min  ` + currTime;
  }
  if (time >= 3600) {
    const hours = Math.floor(time / 3600);
    currTime = `${hours.toString().padStart(2, "0")}:${currTime}`;
    currTime =
      `${hours.toString().padStart(2, "0")}:${currTime} hr  ` + currTime;
  }
  return currTime;
}
