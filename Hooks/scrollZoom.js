"use client";
import { useEffect } from "react";

export default function useScrollZoom(selector, threshold = 0.4) {
  useEffect(() => {
    if (typeof window === "undefined") return; 

    let observer;

    const init = () => {
      const elements = document.querySelectorAll(selector);
      if (!elements || elements.length === 0) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.target) {
            entry.target.classList.toggle("in-view", entry.isIntersecting);
            }
          });
        },
        { threshold }
      );

      elements.forEach((el) => observer.observe(el));
      
    };


    const raf = requestAnimationFrame(() => {
      setTimeout(init, 50);
    });

    return () => {
      cancelAnimationFrame(raf);
      if (observer) observer.disconnect();
    };
  }, [selector, threshold]);
}
