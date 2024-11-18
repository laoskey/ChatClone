"use client";

<<<<<<< HEAD
=======
// import CreateServerModal from "@/components/modals/CreateServerModal";
>>>>>>> 7a3f934cf14d78dabd290d879816992c97785cfb
import { useEffect, useState } from "react";
import CreateModalV1 from "../modals/CreateServerModalV1";
import InviteModalV1 from "../modals/InviteModalV1";
import EditServerModalV1 from "../modals/EditServerModalV1";
import MembersModalV1 from "../modals/MembersModalV1";
<<<<<<< HEAD
import { useIsMounted } from "@/lib/hooks/useIsMounted";

const ModalProvider = () => {
=======

function ModalProvider() {
>>>>>>> 7a3f934cf14d78dabd290d879816992c97785cfb
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

<<<<<<< HEAD
  if (!isMounted) {
    return null;
  }

  return (
    <>
=======
  if (!isMounted) return null;

  return (
    <div>
      {/* <CreateServerModal /> */}
      {/* TODO:Add the uploadFile func that can upload loacl 
      image as the server avatar  when user create the server  */}
>>>>>>> 7a3f934cf14d78dabd290d879816992c97785cfb
      <CreateModalV1 />
      <InviteModalV1 />
      <EditServerModalV1 />
      <MembersModalV1 />
<<<<<<< HEAD
    </>
  );
};
=======
    </div>
  );
}
>>>>>>> 7a3f934cf14d78dabd290d879816992c97785cfb

export default ModalProvider;
