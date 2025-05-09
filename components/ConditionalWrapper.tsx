"use client";
import { usePathname } from "next/navigation";

export default function ConditionalWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDashboardPage = /^\/dashboard\/.+/.test(pathname)
  return (
    <div
      className={`${isDashboardPage?"hidden sm:flex":"flex"} flex-col items-center gap-4  bg-white sm:w-96 p-3 sm:min-h-0 rounded-lg shadow-md`}
    >
      {children}
    </div>
  );
}
