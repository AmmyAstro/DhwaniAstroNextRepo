"use client";
import { useEffect } from "react";

export default function Snowfall() {
  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.innerText = "❄";

      snowflake.style.left = Math.random() * 100 + "vw";
      snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
      snowflake.style.animationDuration = Math.random() * 5 + 5 + "s";
      snowflake.style.opacity = Math.random();

      document.body.appendChild(snowflake);

      setTimeout(() => {
        snowflake.remove();
      }, 10000);
    };

    const interval = setInterval(createSnowflake, 200);

    return () => clearInterval(interval);
  }, []);

  return null;
}
