import InitialModal from "@/components/modals/InitialModal";
import { db } from "@/lib/db";
import { initialProfiles } from "@/lib/initial-profiles";
import { redirect } from "next/navigation";

interface SetupPageProps {}
export default async function SetupPage() {
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
