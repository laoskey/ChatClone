"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { io as ClientIO } from "socket.io-client";

type SocketContextType = {
  socket: any | null;
  isConnected: boolean;
};
const SocketContext = createContext<SocketContextType>({
  socket: null,
  isConnected: false,
});

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (context === undefined)
    throw new Error("[SocketContext] was used out of the CItiesProvider");
  return context;
};

interface SocketProviderProps {
  children: React.ReactNode;
}
export function SocketProvider({ children }: SocketProviderProps) {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const socketInstance = new (ClientIO as any)(
      process.env.NEXT_PUBLIC_SITE_URL!,
      {
        path: "/api/soclet/io",
        addTrailingSlash: false,
      }
    );

    socketInstance.on("connect", () => {
      setIsConnected(true);
    });
    socketInstance.on("disconnect", () => {
      setIsConnected(false);
    });

    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket, isConnected }}>
      {children}
    </SocketContext.Provider>
  );
}

export default SocketProvider;
