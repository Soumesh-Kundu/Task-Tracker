"use client";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, DialogTitle, DialogContent } from "../ui/dialog";
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
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { useEffect } from "react";
import { addTask, editTask } from "@/app/_actions";

const formState = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string(),
});

export default function TaskModal() {
  const { isModalOpen, data } = useSelector(
    (state: RootState) => state.taskModal
  );
  const dispatch = useDispatch();

  const form = useForm<z.infer<typeof formState>>({
    resolver: zodResolver(formState),
    defaultValues: {
      title: data?.title || "",
      description: data?.description || "",
    },
  });
  useEffect(() => {
    form.reset({
      title: data?.title || "",
      description: data?.description || "",
    });
  }, [data]);

  async function onSubmit(values: z.infer<typeof formState>) {
    const { title, description } = values;
    try {
      const taskData = { title, description };
      let res;
      if (!data?.id) {
        res = await addTask(taskData);
      } else {
        const taskData = { title, description };
        res = await editTask({ id: data.id, updates: taskData });
      }
      form.reset();
      dispatch(setModalOpen(false));
    } catch (error) {
      console.log(error);
    }
  }
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
        <DialogTitle>{data?.id ? "Edit" : "Add"} Task</DialogTitle>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
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
            <div className="w-full mx-auto h-px bg-gray-200 my-2"></div>
            <div className="flex justify-end gap-2">
              <Button>{data?.id ? "Save" : "Add"}</Button>
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
