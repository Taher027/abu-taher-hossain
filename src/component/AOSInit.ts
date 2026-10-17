"use client";

import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    const start = () => {
      setTimeout(() => AOS.init(), 100);
    };

    if (document.readyState === "complete") {
      start();
    } else {
      window.addEventListener("load", start, { once: true });
      return () => window.removeEventListener("load", start);
    }
  }, []);

  return null;
}
