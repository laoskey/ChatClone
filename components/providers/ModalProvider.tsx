"use client";

import CreateServerModal from "@/components/modals/CreateServerModal";
import { useEffect, useState } from "react";
import CreateModalV1 from "../modals/CreateModalV1";

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
    </div>
  );
}

export default ModalProvider;
