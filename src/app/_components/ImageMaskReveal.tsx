"use client";

import { useEffect } from "react";

export function ImageMaskReveal() {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(".mask-reveal"),
    );
    if (!targets.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((el) => el.classList.add("mask-reveal-in"));
      return;
    }

    const reveal = () => {
      const scale = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--canvas-scale",
        ) || "1",
      );
      // scrollY is in wrapper-space; convert to canvas layout-space by dividing by scale.
      const canvasScrollTop = window.scrollY / scale;
      const canvasViewBottom = canvasScrollTop + window.innerHeight / scale;

      for (const el of targets) {
        if (el.classList.contains("mask-reveal-in")) continue;
        const elTop = el.offsetTop;
        const triggerLine = elTop + el.offsetHeight * 0.05;
        if (triggerLine < canvasViewBottom) {
          el.classList.add("mask-reveal-in");
        }
      }
    };

    window.addEventListener("scroll", reveal, { passive: true });
    // Run once on mount to catch elements already in view.
    reveal();
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return null;
}
