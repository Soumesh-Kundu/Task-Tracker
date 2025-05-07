"use client";
import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useSession } from "next-auth/react";
import ProfileDropDown from "./ProfileDropDown";
import { LogOut } from "lucide-react";
import { useDispatch } from "react-redux";
import { setData, setModalOpen } from "@/lib/store/slice/taskModal";

export default function Navbar() {
  const user = useSession();
  const dispatch = useDispatch();
  const handleModalOpen = () => {
    dispatch(setData(null));
    dispatch(setModalOpen(true));
  };
  return (
    <header>
      <nav className="flex bg-white/70 backdrop-blur-md w-full sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-1">
          <div className="text-xl font-bold">Task Tracker</div>
          <ul className="flex space-x-4">
            <Button onClick={handleModalOpen}>Add Task</Button>
            <ProfileDropDown>
              <Avatar className="cursor-pointer" >
                <AvatarImage src={user.data?.user.image}></AvatarImage>
                <AvatarFallback>DP</AvatarFallback>
              </Avatar>
            </ProfileDropDown>
          </ul>
        </div>
      </nav>
    </header>
  );
}
