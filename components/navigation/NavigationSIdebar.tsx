import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

async function NavigationSIdebar() {
  const profile = await currentProfile();
  if (!profile) {
    return null;
  }

  const server = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });
  return (
    <div className='space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] py-3'>
      <NavigationAcction />
    </div>
  );
}

export default NavigationSIdebar;
