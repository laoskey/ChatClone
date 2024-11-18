"use client";

import { useParams } from "next/navigation";

function ServerIdPage() {
  const params = useParams();

<<<<<<< HEAD
  return <div className="text-white">serverIDsssss {params.serverId}</div>;
=======
  return (
    <div className='text-white'>serverIDsssss {params.serverId}</div>
  );
>>>>>>> 7a3f934cf14d78dabd290d879816992c97785cfb
}

export default ServerIdPage;
