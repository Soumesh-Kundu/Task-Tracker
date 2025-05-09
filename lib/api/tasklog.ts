export async function deleteActivityLog(taskId: number, activityId: number) {
  const res = await fetch(`/api/tasklog/delete/${taskId}/${activityId}`, {
    method: "DELETE",
  });
  return await res.json();
}
export async function upsertActivityLog(taskId: number, activityId: number, duration: number = 0) {
  const res = await fetch(`/api/tasklog/upsert/${taskId}/${activityId}`, {
    method: "PATCH",
    body: JSON.stringify({ duration }),
  });
  return await res.json();
}