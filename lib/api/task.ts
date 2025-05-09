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