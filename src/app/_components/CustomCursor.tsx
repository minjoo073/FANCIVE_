"use client";

import { useEffect, useRef, useState } from "react";

const CURSOR_LERP = 0.18;

export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }
    setEnabled(true);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    const move = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const tick = () => {
      ringX += (mouseX - ringX) * CURSOR_LERP;
      ringY += (mouseY - ringY) * CURSOR_LERP;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    const isHoverTarget = (el: EventTarget | null) =>
      !!(el instanceof Element) &&
      !!el.closest("img:not(.no-hover), a, button, [data-cursor-hover]");

    const onOver = (e: PointerEvent) => {
      if (isHoverTarget(e.target)) setHovering(true);
    };
    const onOut = (e: PointerEvent) => {
      if (isHoverTarget(e.target)) setHovering(false);
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerout", onOut, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerout", onOut);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ringRef}
      aria-hidden
      className={`fixed pointer-events-none z-[9999] top-0 left-0 rounded-full border border-ink/60 transition-[width,height,background-color,opacity] duration-500 ease-out ${
        hovering
          ? "w-[52px] h-[52px] bg-ink/[0.04] opacity-100"
          : "w-7 h-7 bg-transparent opacity-80"
      }`}
    />
  );
}
