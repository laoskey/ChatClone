import { Server as ServerIO } from "socket.io";
import { Server as NetServer } from "http";
import { NextApiRequest } from "next";
import { NextApiResponseServerIo } from "@/lib/types";

export const config = {
  api: {
    bodyParser: false,
  },
};

const ioHandler = (req: NextApiRequest, res: NextApiResponseServerIo) => {
  try {
    if (!res.socket.server.io) {
      const path = "/api/socket/io";
      // const path = "/api/socket";
      const httpServer: NetServer = res.socket.server as any;

      const io = new ServerIO(httpServer, {
        path: path,
        addTrailingSlash: false,
      });

      res.socket.server.io = io;
    }
    res.end();
  } catch (error) {
    console.log("[SOCKET_SERVER]", error);
    return null;
  }
};

// export const socket = io();
export default ioHandler;
