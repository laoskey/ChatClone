import { Server, Member, Profile } from "@prisma/client";

import { Server as SocketIoServer } from "socket.io";
import { Server as NetServer } from "http";
import { NextApiResponse } from "next";

export type ServerWithMembersWithProfiles = Server & {
  members: (Member & { profile: Profile })[];
};

export type NextApiResponseServerIo = NextApiResponse & {
  socket: {
    server: NetServer & {
      io: SocketIoServer;
    };
  };
};
