"use client";

import { useEffect, useState } from "react";
import CreateModalV1 from "../modals/CreateServerModalV1";
import InviteModalV1 from "../modals/InviteModalV1";
import EditServerModalV1 from "../modals/EditServerModalV1";
import MembersModalV1 from "../modals/MembersModalV1";

import { CreateChannelModal } from "../modals/CreateChannelModal";
import { LeaveServerModal } from "../modals/LeaveServerModal";
import { DeleteServerModal } from "../modals/DeleteServerModal";
import { DeleteChannelModal } from "../modals/DeleteChannelModal";
import { EditChannelModal } from "../modals/EditChannelModal";

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
    </>
  );
};

export default ModalProvider;
