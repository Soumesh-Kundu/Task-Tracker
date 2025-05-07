"use client";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, DialogTitle, DialogContent } from "./ui/dialog";
import { RootState } from "@/lib/store";
import { setModalOpen } from "@/lib/store/slice/taskModal";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { useEffect } from "react";

const formState = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string(),
  status: z.enum(["PENDING", "INPROGRESS", "COMPLETED"]).nullable(),
});

export default function TaskModal() {
  const { isModalOpen, data } = useSelector(
    (state: RootState) => state.taskModal
  );
  const dispatch = useDispatch();

  const form = useForm({
    resolver: zodResolver(formState),
    defaultValues: {
      title: data?.title || "",
      description: data?.description || "",
      status: data?.status || null,
    },
  });
  useEffect(()=>{
    if (data) {
      form.reset({
        title: data?.title || "",
        description: data?.description || "",
        status: data?.status || null,
      });
    }
  },[data])
  return (
    <Dialog
      open={isModalOpen}
      onOpenChange={(e) => {
        if (!e) {
          form.reset();
          dispatch(setModalOpen(false));
        }
      }}
    >
      <DialogContent>
        <DialogTitle>Add Task</DialogTitle>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => {
              console.log(data);
            })}
            className="flex flex-col gap-2 mt-2"
          >
            <FormField
              name="title"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="description"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {data?.status && (
              <FormField
                name="status"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select a status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="PENDING">Pending</SelectItem>
                          <SelectItem value="INPROGRESS">
                            In Progress
                          </SelectItem>
                          <SelectItem value="COMPLETED">Completed</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <div className="w-full mx-auto h-px bg-gray-200 my-2"></div>
            <div className="flex justify-end gap-2">
              <Button>Add</Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  form.reset();
                  dispatch(setModalOpen(false));
                }}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
