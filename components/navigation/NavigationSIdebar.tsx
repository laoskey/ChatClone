import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import NavigationAcction from "@/components/navigation//NavigationAcction";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import NavigationItem from "@/components/navigation/NavigationItem";
import { ModeToggle } from "@/components/modal-toggle";
import { UserButton } from "@clerk/nextjs";

async function NavigationSIdebar() {
  const profile = await currentProfile();
  if (!profile) {
    return null;
  }

  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });
  return (
    <div className="space-y-4 flex flex-col items-center h-full text-primary w-full bg-[#e3e5e8] dark:bg-[#1E1F22] py-3">
      <NavigationAcction />
      <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700  rounded-md w-10 max-auto" />
      <ScrollArea className="flex-1 w-full">
        {servers.map((server) => {
          return (
            <div className="mb-4" key={server.id}>
              <NavigationItem
                id={server.id}
                imageUrl={server.imageUrl}
                name={server.name}
              />
            </div>
          );
        })}
      </ScrollArea>
      <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
        <ModeToggle />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "h-[3rem] w-[3rem]",
            },
          }}
        />
      </div>
    </div>
  );
}

export default NavigationSIdebar;
