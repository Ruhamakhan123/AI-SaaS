"use client";
import * as z from "zod";
import Heading from "@/components/Heading";
import { Music, Video } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Empty } from "@/components/Empty";
import Loader from "@/components/Loader";
import { useProModal } from "@/hooks/UseProModal";
import toast from "react-hot-toast";

function MusicPage() {
  const proModal = useProModal();
  const router = useRouter();
  const [video, setVideo] = useState<string>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setVideo(undefined);
      const response = await axios.post("/api/video", values);
      setVideo(response.data[0]);
      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      router.refresh();
    }
  };
  const renderMessage = (message: any) => {
    return <div>{message.content}</div>;
  };
  return (
    <div>
      <Heading
        title="Video Generation"
        description="Turn your prompt into video"
        icon={Video}
        iconColor="text-orange-700"
        bgColor="bg-orange-700/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              autoComplete="off"
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm  grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 md:col-span-10">
                    <FormControl className="m-0 p-0 ">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Clown fish swimming around a coral reef"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button
                className="col-span-12 lg:col-span-2 bg-orange-700 w-full hover:bg-orange-700/70 hover:text-zinc-950"
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="flex items-center justify-center p-8 rounded-lg bg-muted">
              <Loader></Loader>
            </div>
          )}
          {!video && !isLoading && <Empty label="No video generated." />}
          {video && (
            <video
              className="w-full aspect-video mt-8 rounded-lg border bg-black "
              controls
            >
              <source src={video} />
            </video>
          )}
        </div>
      </div>
    </div>
  );
}

export default MusicPage;
