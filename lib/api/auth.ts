export async function registerUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const res = await fetch(`/api/auth/register`, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return {...data,success:res.status};
}
