"use client";

import { cn } from "@/lib/utils";
import ActionTooltip from "../ActionTooltip";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

interface NavigationItemProps {
  id: string;
  imageUrl: string;
  name: string;
}
function NavigationItem({ id, imageUrl, name }: NavigationItemProps) {
  const params = useParams();
  const router = useRouter();
  return (
    <ActionTooltip
      label={name}
      side='right'
      align='center'
    >
      <button
        onClick={() => {
          router.push(`/servers/${id}`);
        }}
        className='group relative flex items-center'
      >
        <div
          className={cn(
            "absolute left-0 bg-primary rounded-r-full transition-all w-[0.25rem]",
            params?.serverId !== id && "group-hover:h-[1.25rem]",
            params?.serverId === id ? "h-[2rem]" : "h-[.5rem]"
          )}
        />

        <div
          className={cn(
            "relative group flex mx-3 h-[3rem] w-[3rem] rounded-[1.5rem] overflow-hidden group-hover:rounded-[1rem] transition-all",
            params?.serverId === id &&
              "bg-primary/10 rounded-[1rem] text-primary"
          )}
        >
          <Image
            fill
            src={imageUrl}
            alt='Channel'
          />
        </div>
      </button>
    </ActionTooltip>
  );
}

export default NavigationItem;
