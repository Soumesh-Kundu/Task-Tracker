"use client";
import { useRef, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Ring } from "ldrs/react";
import "ldrs/react/Ring.css"

export default function ConfimationBox({
  children,
  message,
  onYes = () => Promise.resolve(),
}: {
  children: React.ReactNode;
  message: string;
  onYes?: () => Promise<void>;
}) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  async function handleOnYes() {
    if (isLoading) return;
    try {
      setIsLoading(true);
      await onYes();
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
    closeButtonRef.current?.click();
  }
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[420px] w-[90%]">
        <DialogTitle hidden></DialogTitle>
        <div className="flex flex-col gap-6">
          <h1 className="text-lg font-medium text-center">Are you sure?</h1>
          <p className="text-sm text-slate-500 text-center">{message}</p>
          <div className="flex justify-center gap-2">
            <Button
              onClick={handleOnYes}
              className="bg-red-500 w-20 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            >
              {
                isLoading ? (
                  <Ring
                    color="white"
                    size={20}
                    stroke={1.5}
                  />
                ) : (
                  "Delete"
                )
              }
            </Button>
            <DialogClose asChild>
              <Button ref={closeButtonRef} variant="outline">
                Cancel
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
