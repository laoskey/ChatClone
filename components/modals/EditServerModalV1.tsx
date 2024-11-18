"use client";
<<<<<<< HEAD
import { useEffect } from "react";
import { useModal } from "@/lib/hooks/useModalStore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
=======
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
>>>>>>> 7a3f934cf14d78dabd290d879816992c97785cfb
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { formSchema } from "@/lib/Schema";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { z } from "zod";
<<<<<<< HEAD
=======
import { useModal } from "@/lib/hooks/useModalStore";
import { useEffect } from "react";
>>>>>>> 7a3f934cf14d78dabd290d879816992c97785cfb
import Image from "next/image";
import { X } from "lucide-react";

function EditServerModalV1() {
  const { isOpen, onClose, type, data } = useModal();
  const router = useRouter();

  const { server } = data;

  const isModalOpen = isOpen && type === "editserver";

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      imageUrl: "",
    },
  });

  useEffect(() => {
    if (server) {
      form.setValue("name", server.name);
      form.setValue("imageUrl", server.imageUrl);
    }
  }, [server, form]);

  const isLoading = form.formState.isSubmitting;

  // TOTO the logic of showing image has bug
  const showImg =
<<<<<<< HEAD
    server?.imageUrl && server.imageUrl === form.getValues("imageUrl");
=======
    server?.imageUrl &&
    server.imageUrl === form.getValues("imageUrl");
>>>>>>> 7a3f934cf14d78dabd290d879816992c97785cfb

  // const onSubmit = async (values: z.infer<typeof formSchema>) => {
  //   console.log(values);
  // };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log({ values });
      await axios.patch(`/api/servers/${server?.id}`, values);

      form.reset();
      router.refresh();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  const handleClose = () => {
    form.reset();
    onClose();
  };

  return (
<<<<<<< HEAD
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center  font-bold">
            Customize your server
          </DialogTitle>
          <DialogDescription className=" text-center text-zinc-500">
            Give your server a personality with a name and an image,You can
            always change it later
=======
    <Dialog
      open={isModalOpen}
      onOpenChange={handleClose}
    >
      <DialogContent className='bg-white text-black p-0 overflow-hidden'>
        <DialogHeader className='pt-8 px-6'>
          <DialogTitle className='text-2xl text-center  font-bold'>
            Customize your server
          </DialogTitle>
          <DialogDescription className=' text-center text-zinc-500'>
            Give your server a personality with a name and an
            image,You can always change it later
>>>>>>> 7a3f934cf14d78dabd290d879816992c97785cfb
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
<<<<<<< HEAD
            <div className="space-y-8 px-10">
=======
            <div className='space-y-8 px-10'>
>>>>>>> 7a3f934cf14d78dabd290d879816992c97785cfb
              {/* TODO:implement the imageUpload by SupaBase */}
              {/* TODO: OR Fixed the uploading bug*/}
              <FormField
                control={form.control}
<<<<<<< HEAD
                name="imageUrl"
                render={({ field }) => {
                  return (
                    <FormItem className="flex items-center justify-center">
                      {showImg ? (
                        <div className="relative h-20 w-20">
                          <Image
                            fill
                            src={server.imageUrl}
                            alt="Upload"
                            className="rounded-full"
                          />
                          <button
                            className="bg-red-600 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
                            type="button"
                            // TODO
                            onClick={() => field.onChange("")}
                          >
                            <X className="h-4 w-4" />
=======
                name='imageUrl'
                render={({ field }) => {
                  return (
                    <FormItem className='flex items-center justify-center'>
                      {showImg ? (
                        <div className='relative h-20 w-20'>
                          <Image
                            fill
                            src={server.imageUrl}
                            alt='Upload'
                            className='rounded-full'
                          />
                          <button
                            className='bg-red-600 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm'
                            type='button'
                            // TODO
                            onClick={() => field.onChange("")}
                          >
                            <X className='h-4 w-4' />
>>>>>>> 7a3f934cf14d78dabd290d879816992c97785cfb
                          </button>
                        </div>
                      ) : (
                        <>
                          <FormLabel>ImageUrl</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
<<<<<<< HEAD
                              className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
=======
                              className='bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0'
>>>>>>> 7a3f934cf14d78dabd290d879816992c97785cfb
                              disabled={isLoading}
                            />
                          </FormControl>
                        </>
                      )}

                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
<<<<<<< HEAD
                name="name"
=======
                name='name'
>>>>>>> 7a3f934cf14d78dabd290d879816992c97785cfb
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>SERVER Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
<<<<<<< HEAD
                          className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
=======
                          className='bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0'
>>>>>>> 7a3f934cf14d78dabd290d879816992c97785cfb
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>

<<<<<<< HEAD
            <DialogFooter className="px-10 mb-4">
              <Button disabled={isLoading} variant={"primary"} className="mt-2">
=======
            <DialogFooter className='px-10 mb-4'>
              <Button
                disabled={isLoading}
                variant={"primary"}
                className='mt-2'
              >
>>>>>>> 7a3f934cf14d78dabd290d879816992c97785cfb
                Save
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default EditServerModalV1;
