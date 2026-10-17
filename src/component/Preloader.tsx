"use client";

import { useEffect, useState } from "react";
import Loading from "./Loader";

export default function Preloader({
  minDuration = 1200,
}: {
  minDuration?: number;
}) {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const start = Date.now();

    const finish = () => {
      const remaining = Math.max(0, minDuration - (Date.now() - start));

      setTimeout(() => {
        setFading(true);
        setTimeout(() => setVisible(false), 500);
      }, remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
      return () => window.removeEventListener("load", finish);
    }
  }, [minDuration]);

  // Lock scroll while loading
  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-100 transition-opacity duration-500 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <Loading />
    </div>
  );
}
