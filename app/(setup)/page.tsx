// import InitialModal from "@/components/modals/InitialModal";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { initialProfiles } from "@/lib/initial-profiles";
import InitialModal from "@/components/modals/testModal";

async function SetupPage() {
  const profile = await initialProfiles();
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return <InitialModal />;
}
export default SetupPage;
