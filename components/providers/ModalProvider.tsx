"use client";

import { useEffect, useState } from "react";
import CreateModalV1 from "@/components/modals/CreateServerModalV1";
import InviteModalV1 from "@/components/modals/InviteModalV1";
import EditServerModalV1 from "@/components/modals/EditServerModalV1";
import MembersModalV1 from "@/components/modals/MembersModalV1";

import { CreateChannelModal } from "@/components/modals/CreateChannelModal";
import { LeaveServerModal } from "@/components/modals/LeaveServerModal";
import { DeleteServerModal } from "@/components/modals/DeleteServerModal";
import { DeleteChannelModal } from "@/components/modals/DeleteChannelModal";
import { EditChannelModal } from "@/components/modals/EditChannelModal";
import MessageFileModal from "@/components/modals/MessageFileModal";
import { DeleteMessageModal } from "../modals/DeleteMessageModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateModalV1 />
      <InviteModalV1 />
      <EditServerModalV1 />
      <MembersModalV1 />
      <CreateChannelModal />
      <LeaveServerModal />
      <DeleteServerModal />
      <DeleteChannelModal />
      <EditChannelModal />
      <MessageFileModal />
      <DeleteMessageModal />
    </>
  );
};

export default ModalProvider;
