"use client";

import { Plus } from "lucide-react";

function NavigationAcction() {
  return (
    <div>
      <button className='group'>
        <div className='flex mx-3 h-[3rem] w-[3rem] rounded-[1.5rem] group-hover:rounded-[1rem] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500'>
          <Plus
            size={25}
            className='group-hover:text-white transition text-emerald-500'
          />
        </div>
      </button>
    </div>
  );
}

export default NavigationAcction;
