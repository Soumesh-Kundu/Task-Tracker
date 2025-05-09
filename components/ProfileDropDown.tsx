"use client";
import { signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator
} from "./ui/dropdown-menu";
import { CalendarCheck, ChartNoAxesCombined, ChevronDown, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfileDropDown({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const router=useRouter()
  return (
    <DropdownMenu onOpenChange={(open) => setIsOpen(open)}>
      <DropdownMenuTrigger className="cursor-pointer relative">
        {children}
        <span className="absolute bottom-1 right-1 translate-y-1/2 translate-x-1/2  z-[60]  rounded-full p-px bg-slate-100">
          <ChevronDown className={` text-gray-800 duration-200 ${isOpen?"rotate-180":"rotate-0"}`}  size={14} />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48" side="bottom" align="end" sideOffset={15}>
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer flex items-center gap-3 font-medium text-base p-2" onClick={() => {router.push("/")}}>
            <CalendarCheck size={15} color="black"/> Tasks
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer flex items-center gap-3 font-medium text-base p-2" onClick={() => {router.push("/dashboard")}}>
          <ChartNoAxesCombined scale={15} strokeWidth={2} color="black" /> Dashboard
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer font-medium text-base p-2 flex items-center gap-3" onClick={() => {signOut({callbackUrl:"/login"})}}>
            Log Out <LogOut size={15} color="black"/>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
