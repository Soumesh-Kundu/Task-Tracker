import { TaskStatus } from "../generated/prisma";

export async function addTask(taskData: {
  title: string;
  description: string;
}) {
  const res = await fetch("/api/task/add", {
    method: "POST",
    body: JSON.stringify(taskData),
  });
  return await res.json();
}

export async function editTask(taskData: {
  id: number;
  title: string;
  description: string;
}) {
  const res = await fetch(`/api/task/update/${taskData.id}`, {
    method: "PATCH",
    body: JSON.stringify({title: taskData.title, description: taskData.description}),
  });
  return await res.json();
} 

export async function deleteTask(taskId: number) {
  const res = await fetch(`/api/task/delete/${taskId}`, {
    method: "DELETE",
  });
  return await res.json();
}

export async function updateTaskStatus(taskId: number, status: TaskStatus) {
  const res = await fetch(`/api/task/update-status/${taskId}`, {
    method: "PATCH",
    body: JSON.stringify({status}),
  });
  return await res.json();
}