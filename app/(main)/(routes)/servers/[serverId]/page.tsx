"use client";

import { useParams } from "next/navigation";

function ServerIdPage() {
  const params = useParams();

  return <div className="text-white">serverIDsssss {params.serverId}</div>;
}

export default ServerIdPage;
