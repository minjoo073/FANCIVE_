"use client";

import { useEffect, useLayoutEffect } from "react";

const DESIGN_WIDTH = 1920;

// useLayoutEffect on the client, no-op on the server (no DOM yet).
const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

export function CanvasScale() {
  useIsomorphicLayoutEffect(() => {
    let frame = 0;
    const apply = () => {
      const scale = Math.min(1, window.innerWidth / DESIGN_WIDTH);
      document.documentElement.style.setProperty(
        "--canvas-scale",
        String(scale),
      );
    };
    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        apply();
      });
    };
    apply();
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
