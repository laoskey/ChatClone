"use client";
<<<<<<< HEAD
import { useState } from "react";
import { useModal } from "@/lib/hooks/useModalStore";
import axios from "axios";
import useOrigin from "@/lib/hooks/useOrigin";
=======
>>>>>>> 7a3f934cf14d78dabd290d879816992c97785cfb
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
<<<<<<< HEAD
=======
import { useModal } from "@/lib/hooks/useModalStore";
>>>>>>> 7a3f934cf14d78dabd290d879816992c97785cfb
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Check, Copy, RefreshCw } from "lucide-react";
<<<<<<< HEAD
=======
import { useRouter } from "next/navigation";
import useOrigin from "@/lib/hooks/useOrigin";
import { useState } from "react";
import axios from "axios";
>>>>>>> 7a3f934cf14d78dabd290d879816992c97785cfb

function InviteModalV1() {
  const [copied, SetCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose, type, data } = useModal();
  const origin = useOrigin();
<<<<<<< HEAD
=======
  const router = useRouter();
>>>>>>> 7a3f934cf14d78dabd290d879816992c97785cfb

  const isModalOpen = isOpen && type === "invite";
  const { server } = data;

  const inviteUrl = `${origin}/invite/${server?.inviteCode}`;

  const onCopy = () => {
    navigator.clipboard.writeText(inviteUrl);
    SetCopied(true);

    setTimeout(() => {
      SetCopied(false);
    }, 1000);
  };

  const onNew = async () => {
    try {
      setIsLoading(true);

      const response = await axios.patch(
        `/api/servers/${server?.id}/invite-code`
      );
      console.log({ response });

      onOpen("invite", { server: response.data });
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  };

  return (
<<<<<<< HEAD
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center  font-bold">
            Invite friends
          </DialogTitle>
        </DialogHeader>
        <div className="p-6">
          <Label className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
            Server invite link
          </Label>
          <div className="flex items-center mt-2 gap-x-2">
            <Input
              disabled={isLoading}
              className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
              value={inviteUrl}
              readOnly
            />
            <Button disabled={isLoading} onClick={onCopy} size="icon">
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
=======
    <Dialog
      open={isModalOpen}
      onOpenChange={onClose}
    >
      <DialogContent className='bg-white text-black p-0 overflow-hidden'>
        <DialogHeader className='pt-8 px-6'>
          <DialogTitle className='text-2xl text-center  font-bold'>
            Invite friends
          </DialogTitle>
        </DialogHeader>
        <div className='p-6'>
          <Label className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'>
            Server invite link
          </Label>
          <div className='flex items-center mt-2 gap-x-2'>
            <Input
              disabled={isLoading}
              className='bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0'
              value={inviteUrl}
              readOnly
            />
            <Button
              disabled={isLoading}
              onClick={onCopy}
              size='icon'
            >
              {copied ? (
                <Check className='w-4 h-4' />
              ) : (
                <Copy className='w-4 h-4' />
>>>>>>> 7a3f934cf14d78dabd290d879816992c97785cfb
              )}
            </Button>
          </div>
          <Button
            onClick={onNew}
            disabled={isLoading}
<<<<<<< HEAD
            variant="link"
            size="sm"
            className="text-xs text-zinc-500 mt-4"
          >
            Generate a new link
            <RefreshCw className="w-4 h-4 ml-2" />
=======
            variant='link'
            size='sm'
            className='text-xs text-zinc-500 mt-4'
          >
            Generate a new link
            <RefreshCw className='w-4 h-4 ml-2' />
>>>>>>> 7a3f934cf14d78dabd290d879816992c97785cfb
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default InviteModalV1;