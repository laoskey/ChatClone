import NavigationSIdebar from "@/components/navigation/NavigationSIdebar";
import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}
async function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className='h-full'>
      <div className='hidden md:flex h-full w-[5rem] z-30 flex-col fixed '>
        <NavigationSIdebar />
      </div>
      <main className='md:pl-[5rem] h-full'>{children}</main>
    </div>
  );
}

export default MainLayout;
