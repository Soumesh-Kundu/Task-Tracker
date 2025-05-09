"use client";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, DialogTitle, DialogContent } from "../ui/dialog";
import { RootState } from "@/lib/store";
import { setModalOpen } from "@/lib/store/slice/taskModal";
import { set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Ring } from "ldrs/react";
import "ldrs/react/Ring.css";
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
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getAISuggestion } from "@/lib/api/ai";
import { Check, X } from "lucide-react";
import { addTask, editTask } from "@/lib/api/task";
import { useRouter } from "next/navigation";

const formState = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string(),
});

export default function TaskModal() {
  const { isModalOpen, data } = useSelector(
    (state: RootState) => state.taskModal
  );
  const dispatch = useDispatch();
  const [previousData, setPreviousData] = useState({
    title: "",
    description: "",
  });
  const [showSuggestion, setShowSuggetion] = useState(false);
  const [loading, setLoading] = useState<"submit" | "ai" | null>(null);
  const router=useRouter()
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
    if (loading!== null  || showSuggestion)  {
      return;
    }
    const { title, description } = values;
    try {
      setLoading("submit");
      const taskData = { title, description };
      let res;
      if (!data?.id) {
        res = await addTask(taskData);
      } else {
        const taskData = { title, description };
        res = await editTask({ id: data.id, ...taskData });
      }
      if(res.status){
        router.refresh();
      }
      form.reset();
      dispatch(setModalOpen(false));
    } catch (error) {
      console.log(error);
    }
    setLoading(null);
  }
  async function getSuggetion() {
    const { title } = form.getValues();
    if (!title || loading) {
      return;
    }
    setLoading("ai");
    try {
      setPreviousData({
        title: form.getValues("title"),
        description: form.getValues("description"),
      });
      const res = await getAISuggestion(title);
      if (res.status) {
        form.setValue("title", res.title);
        form.setValue("description", res.description);
        setShowSuggetion(true);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(null);
  }
  function resetPreviousContent() {
    form.setValue("title", previousData.title);
    form.setValue("description", previousData.description);
    setShowSuggetion(false);
  }
  function handleAcceptSuggetion() {
    const { title, description } = form.getValues();
    setPreviousData({ title, description });
    setShowSuggetion(false);
  }
  return (
    <Dialog
      open={isModalOpen}
      onOpenChange={(e) => {
        if (!e) {
          form.reset();
          dispatch(setModalOpen(false));
          setShowSuggetion(false);
          setPreviousData({ title: "", description: "" });
          setLoading(null);
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
                    <div className="flex gap-2">
                      <Input
                        disabled={showSuggestion}
                        placeholder="Title"
                        {...field}
                        className="flex-grow"
                      />
                      <Button
                        disabled={loading !== null}
                        onClick={getSuggetion}
                        variant="outline"
                        className="w-9 h-9 p-1"
                      >
                        {loading === "ai" ? (
                          <Ring size={20} stroke={1.5} />
                        ) : (
                          <Image
                            src="/gemini.png"
                            width={30}
                            height={30}
                            alt="gemini_png"
                            className="bg-transparent"
                          />
                        )}
                      </Button>
                    </div>
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
                    <Textarea   disabled={showSuggestion} placeholder="Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {showSuggestion && <div className="flex justify-end gap-3">
              <button onClick={handleAcceptSuggetion} type="button" className="flex items-center gap-1 rounded-md border text-black text-sm p-1 cursor-pointer hover:bg-gray-50">
                <Check size={15}/>
                Accept
              </button>
              <button onClick={resetPreviousContent} type="button" className="flex items-center gap-1 rounded-md border text-black text-sm px-1.5 cursor-pointer hover:bg-gray-50">
                <X size={15}/>
                Decline
              </button>
            </div>}
            <div className="w-full mx-auto h-px bg-gray-200 my-1"></div>
            <div className="flex justify-end gap-2">
              <Button>{
              loading==="submit"? <Ring size={20} stroke={1.5} color="white"/> :
              data?.id ? "Save" : "Add"}</Button>
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
