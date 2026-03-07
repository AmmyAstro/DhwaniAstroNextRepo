
"use client";

import { cookieHelper } from '@/src/helpers/cookieHelper';
import React, { createContext, useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const SocketContext = createContext();
const SOCKET_URL = "https://chatmicroservice.onrender.com";

// const SOCKET_URL = "http://localhost:8001";

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
 const token = cookieHelper.get("access_token")
   const socketInstance = io(SOCKET_URL, { 
    transports: ['websocket', 'polling'],
    auth: {
      token: token  
    }
  });

    socketInstance.on('connect', () => {

      console.log('Socket connected:', socketInstance.id);
      setLoading(false); 
    });

    setSocket(socketInstance);

    return () => {
      if (socketInstance) {
        socketInstance.disconnect();
      }
    };
  }, []);

  // if (loading) {
  //   return <div>Connecting...</div>;
  // }

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContext;
