"use client";

import { Plus } from "lucide-react";
import ActionTooltip from "../ActionTooltip";
import { useModal } from "@/lib/hooks/useModalStore";

function NavigationAcction() {
  const { onOpen } = useModal();
  return (
    <div>
      <ActionTooltip
        label='Add a server'
        side='right'
        align='center'
      >
        <button
          className='group'
          onClick={() => onOpen("createServer")}
        >
          <div className='flex mx-3 h-[3rem] w-[3rem] rounded-[1.5rem] group-hover:rounded-[1rem] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500'>
            <Plus
              size={25}
              className='group-hover:text-white transition text-emerald-500'
            />
          </div>
        </button>
      </ActionTooltip>
    </div>
  );
}

export default NavigationAcction;
