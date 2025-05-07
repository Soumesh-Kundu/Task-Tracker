import Navbar from "@/components/Navbar";
import Wrapper from "@/components/Wrapper";
import { getServerUser } from "@/lib/auth";
import { permanentRedirect } from "next/navigation";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = getServerUser();
  if (!session) {
    permanentRedirect("/login");
  }
  return <Wrapper>
    <Navbar/>
    {children}
    
    </Wrapper>;
}
