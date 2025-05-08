"use client";
import { useRef } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

export default function ConfimationBox({
  children,
  onYes,
}: {
  children: React.ReactNode;
  onYes: () => Promise<void>;
}) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  async function handleOnYes() {
    await onYes();
    closeButtonRef.current?.click();
  }
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[420px] w-[90%]">
        <DialogTitle hidden></DialogTitle>
        <div className="flex flex-col gap-6">
          <h1 className="text-lg font-medium text-center">Are you sure?</h1>
          <p className="text-sm text-slate-500 text-center">
            This action cannot be undone and all the activity log will be lost.
          </p>
          <div className="flex justify-center gap-2">
            <Button
              onClick={handleOnYes}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Delete
            </Button>
            <DialogClose asChild >
              <Button ref={closeButtonRef} variant="outline">Cancel</Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
