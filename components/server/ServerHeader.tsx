"use client";

import { ServerWithMembersWithProfiles } from "@/lib/types";
import { MemberRole } from "@prisma/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  LogOut,
  PlusCircle,
  Settings,
  Trash,
  UserPlus,
  Users,
} from "lucide-react";
import { useModal } from "@/lib/hooks/useModalStore";

interface ServerHeaderProps {
  server: ServerWithMembersWithProfiles;
  role?: MemberRole;
}
function ServerHeader({ server, role }: ServerHeaderProps) {
  const { onOpen } = useModal();
  const isAdmin = role === MemberRole.ADMIN;
  const isModerator = isAdmin || role === MemberRole.MODERATOR;
  return (
    <DropdownMenu>
<<<<<<< HEAD
      <DropdownMenuTrigger className="focus:outline-none" asChild>
        <button className="w-full text-md font-semibold px-3 flex  justify-between items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2 hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition">
=======
      <DropdownMenuTrigger
        className='focus:outline-none'
        asChild
      >
        <button className='w-full text-md font-semibold px-3 flex  justify-between items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2 hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition'>
>>>>>>> 7a3f934cf14d78dabd290d879816992c97785cfb
          {server.name}
          <ChevronDown />
        </button>
      </DropdownMenuTrigger>
<<<<<<< HEAD
      <DropdownMenuContent className="w-56 text-xs font-medium text-black dark:text-neutral-400 space-y-[2px]">
        {isModerator && (
          <DropdownMenuItem
            onClick={() => onOpen("invite", { server })}
            className="text-indigo-600 dark:text-indigo-400 px-3 py-2 text-sm cursor-pointer"
          >
            Invtite people
            <UserPlus className="h-5 w-5 ml-auto" />
=======
      <DropdownMenuContent className='w-56 text-xs font-medium text-black dark:text-neutral-400 space-y-[2px]'>
        {isModerator && (
          <DropdownMenuItem
            onClick={() => onOpen("invite", { server })}
            className='text-indigo-600 dark:text-indigo-400 px-3 py-2 text-sm cursor-pointer'
          >
            Invtite people
            <UserPlus className='h-5 w-5 ml-auto' />
>>>>>>> 7a3f934cf14d78dabd290d879816992c97785cfb
          </DropdownMenuItem>
        )}
        {isAdmin && (
          <DropdownMenuItem
            onClick={() => onOpen("editserver", { server })}
<<<<<<< HEAD
            className="t px-3 py-2 text-sm cursor-pointer"
          >
            Server Settings
            <Settings className="h-5 w-5 ml-auto" />
=======
            className='t px-3 py-2 text-sm cursor-pointer'
          >
            Server Settings
            <Settings className='h-5 w-5 ml-auto' />
>>>>>>> 7a3f934cf14d78dabd290d879816992c97785cfb
          </DropdownMenuItem>
        )}
        {isAdmin && (
          <DropdownMenuItem
<<<<<<< HEAD
            onClick={() => onOpen("members", { server })}
            className="px-3 py-2 text-sm cursor-pointer"
          >
            Manage Members
            <Users className="h-4 w-4 ml-auto" />
=======
            // onClick={() => onOpen("members", { server })}
            className='px-3 py-2 text-sm cursor-pointer'
          >
            Manage Members
            <Users className='h-4 w-4 ml-auto' />
>>>>>>> 7a3f934cf14d78dabd290d879816992c97785cfb
          </DropdownMenuItem>
        )}
        {isModerator && (
          <DropdownMenuItem
            // onClick={() => onOpen("createChannel")}
<<<<<<< HEAD
            className="px-3 py-2 text-sm cursor-pointer"
          >
            Create Channel
            <PlusCircle className="h-4 w-4 ml-auto" />
=======
            className='px-3 py-2 text-sm cursor-pointer'
          >
            Create Channel
            <PlusCircle className='h-4 w-4 ml-auto' />
>>>>>>> 7a3f934cf14d78dabd290d879816992c97785cfb
          </DropdownMenuItem>
        )}
        {isModerator && <DropdownMenuSeparator />}
        {isAdmin && (
          <DropdownMenuItem
            // onClick={() => onOpen("deleteServer", { server })}
<<<<<<< HEAD
            className="text-rose-500 px-3 py-2 text-sm cursor-pointer"
          >
            Delete Server
            <Trash className="h-4 w-4 ml-auto" />
=======
            className='text-rose-500 px-3 py-2 text-sm cursor-pointer'
          >
            Delete Server
            <Trash className='h-4 w-4 ml-auto' />
>>>>>>> 7a3f934cf14d78dabd290d879816992c97785cfb
          </DropdownMenuItem>
        )}
        {!isAdmin && (
          <DropdownMenuItem
            // onClick={() => onOpen("leaveServer", { server })}
<<<<<<< HEAD
            className="text-rose-500 px-3 py-2 text-sm cursor-pointer"
          >
            Leave Server
            <LogOut className="h-4 w-4 ml-auto" />
=======
            className='text-rose-500 px-3 py-2 text-sm cursor-pointer'
          >
            Leave Server
            <LogOut className='h-4 w-4 ml-auto' />
>>>>>>> 7a3f934cf14d78dabd290d879816992c97785cfb
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ServerHeader;
