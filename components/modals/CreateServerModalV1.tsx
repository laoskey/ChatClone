"use client";
<<<<<<< HEAD
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useModal } from "@/lib/hooks/useModalStore";
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
<<<<<<< HEAD

import { Button } from "@/components/ui/button";

import { z } from "zod";
=======
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useModal } from "@/lib/hooks/useModalStore";
>>>>>>> 7a3f934cf14d78dabd290d879816992c97785cfb

function CreateModalV1() {
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === "createServer";
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      imageUrl: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  // const onSubmit = async (values: z.infer<typeof formSchema>) => {
  //   console.log(values);
  // };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log({ values });
      await axios.post("/api/servers", values);

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
            <div className="space-y-8">
              <FormField
                control={form.control}
                name="name"
=======
            <div className='space-y-8'>
              <FormField
                control={form.control}
                name='name'
>>>>>>> 7a3f934cf14d78dabd290d879816992c97785cfb
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
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

              {/* TODO:implement the imageUpload by SupaBase */}
              {/* TODO: OR Fixed the uploading bug*/}
              <FormField
                control={form.control}
<<<<<<< HEAD
                name="imageUrl"
=======
                name='imageUrl'
>>>>>>> 7a3f934cf14d78dabd290d879816992c97785cfb
                render={({ field }) => {
                  return (
                    <FormItem>
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
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>

            <DialogFooter>
              <Button disabled={isLoading}>Save</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default CreateModalV1;
