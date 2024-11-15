"use client";

import { useSearchParams } from "next/navigation";

function ServerIdPage() {
  const searchParams = useSearchParams();

  return (
    <div className='text-white'>
      serverIDsssss {searchParams.get("serverId")?.toString()}
    </div>
  );
}

export default ServerIdPage;
