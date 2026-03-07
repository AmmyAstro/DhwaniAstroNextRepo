"use client";

import React, { useEffect, useRef } from "react";

export default function VideoCall() {
  const containerRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const initZego = async () => {
      try {
        // Dynamic import — loads only when the component actually mounts
        const { ZegoUIKitPrebuilt } = await import(
          /* webpackChunkName: "zego-uikit-prebuilt" */
          "@zegocloud/zego-uikit-prebuilt"
        );

        if (!isMounted) return;

        const appID = Number(process.env.NEXT_PUBLIC_ZEGO_APP_ID);
        const serverSecret = process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET;
        const roomID = "demo-room";
        const userID = String(Math.floor(Math.random() * 10000));
        const userName = "User_" + userID;

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
          appID,
          serverSecret,
          roomID,
          userID,
          userName
        );

        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
          container: containerRef.current,
          scenario: {
            mode: ZegoUIKitPrebuilt.VideoConference,
          },
        });
      } catch (err) {
        console.error("Zego load failed:", err);
      }
    };

    // Small delay prevents blocking render
    const timer = setTimeout(initZego, 100);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100vw",
        height: "100vh",
      }}
    />
  );
}
