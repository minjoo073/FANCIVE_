"use client";

import { useEffect } from "react";

// Coefficients (design px, 1920 baseline). Mixed direction + speed for editorial layering.
const COEFFS = [-14, 22, -10, 18, -22, 12, -16, 24, -10];

export function CollectionParallax() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const imgs = Array.from(
      document.querySelectorAll<HTMLImageElement>("[data-collection-img]"),
    );
    if (!imgs.length) return;

    const section = imgs[0].closest("[data-collection-grid]") as HTMLElement | null;
    if (!section) return;

    let raf = 0;
    let visible = false;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible = entry.isIntersecting;
          if (visible && !raf) raf = requestAnimationFrame(tick);
        }
      },
      { rootMargin: "10% 0px 10% 0px" },
    );
    io.observe(section);

    const tick = () => {
      if (!visible) {
        raf = 0;
        return;
      }
      const rect = section.getBoundingClientRect();
      const viewportH = window.innerHeight;
      // Progress 0 (section bottom touches viewport top) → 1 (section top touches viewport bottom)
      const p = 1 - (rect.top + rect.height) / (viewportH + rect.height);
      const centered = (p - 0.5) * 2; // -1 ~ 1
      imgs.forEach((img, i) => {
        const offset = centered * COEFFS[i % COEFFS.length];
        img.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
      });
      raf = requestAnimationFrame(tick);
    };

    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
      imgs.forEach((img) => (img.style.transform = ""));
    };
  }, []);

  return null;
}
