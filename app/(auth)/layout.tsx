import Navbar from "@/components/Navbar";
import Wrapper from "@/components/Wrapper";
import { getServerUser } from "@/lib/auth";
import { permanentRedirect } from "next/navigation";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerUser();
  if (session) {
    permanentRedirect("/");
  }
  return <>
    {children}
  </>
}
