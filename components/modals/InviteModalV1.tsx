"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModal } from "@/lib/hooks/useModalStore";

function InviteModalV1() {
  const { isOpen, onClose, type } = useModal();
  const isModalOpen = isOpen && type === "invite";

  return (
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
        Invite Modal
      </DialogContent>
    </Dialog>
  );
}

export default InviteModalV1;
