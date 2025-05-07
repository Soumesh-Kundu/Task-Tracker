import { getServerSession } from "next-auth";
import { permanentRedirect } from "next/navigation";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = getServerSession();
  if (!session) {
    permanentRedirect('/login');
  }
  return <>{children}</>;
}
