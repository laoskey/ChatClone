"use client";
import { useModal } from "@/lib/hooks/useModalStore";
import { redirect, useRouter } from "next/navigation";
import useOrigin from "@/lib/hooks/useOrigin";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ServerWithMembersWithProfiles } from "@/lib/types";

function MembersModalV1() {
  const { isOpen, onOpen, onClose, type, data } = useModal();
  const router = useRouter();

  const isModalOpen = isOpen && type === "members";
  const { server } = data as {
    server: ServerWithMembersWithProfiles;
  };
  // Fixed:this code will make the " client side component damage " by redirect too much
  // if (!server) {
  //   return redirect("/");
  // }

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center  font-bold">
            Manage Members
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>{server.members.length} Members</DialogDescription>
        <div className="p-6">Hello member</div>
      </DialogContent>
    </Dialog>
  );
}

export default MembersModalV1;
