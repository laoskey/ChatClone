"use client";

// import CreateServerModal from "@/components/modals/CreateServerModal";
import { useEffect, useState } from "react";
import CreateModalV1 from "../modals/CreateServerModalV1";
import InviteModalV1 from "../modals/InviteModalV1";
import EditServerModalV1 from "../modals/EditServerModalV1";

function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div>
      {/* <CreateServerModal /> */}
      {/* TODO:Add the uploadFile func that can upload loacl 
      image as the server avatar  when user create the server  */}
      <CreateModalV1 />
      <InviteModalV1 />
      <EditServerModalV1 />
    </div>
  );
}

export default ModalProvider;
