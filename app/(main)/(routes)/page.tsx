import { Button } from "@/components/ui/button";
import { SignOutButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className='flex flex-col '>
      <UserButton afterSignOutUrl='/' />
    </div>
  );
}
