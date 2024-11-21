import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

import NavigationSIdebar from "@/components/navigation/NavigationSIdebar";
import ServerSidebar from "@/components/server/ServerSidebar";

interface MobileToggleProps {
  serverId: string;
}
function MobileToggle({ serverId }: MobileToggleProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"ghost"} size={"icon"} className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side={"left"} className="p-0 flex gap-0">
        <div className="w-[4.5rem]">
          <NavigationSIdebar />
        </div>
        <ServerSidebar serverId={serverId} />
      </SheetContent>
    </Sheet>
  );
}

export default MobileToggle;
