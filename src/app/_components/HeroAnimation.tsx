"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export function HeroAnimation() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(".hero-fade");
    if (!targets.length) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      targets.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
        el.style.clipPath = "none";
      });
      return;
    }

    const ctx = gsap.context(() => {
      // Base stagger — opacity + lift for all .hero-fade elements
      gsap.fromTo(
        ".hero-fade",
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.12,
          delay: 0.2,
        },
      );

      // Wordmark — left→right clip-path sweep, then quiet ambient breath
      gsap.fromTo(
        ".hero-wordmark",
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.4,
          ease: "power2.inOut",
          delay: 0.7,
          onComplete: () => {
            // Ambient breath — ink-on-paper micro pulse, infinite quiet loop
            gsap.to(".hero-wordmark", {
              opacity: 0.88,
              duration: 3.5,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
            });
          },
        },
      );

      // Model — bottom→top reveal (darkroom develop)
      gsap.fromTo(
        ".hero-model",
        { clipPath: "inset(0 0 100% 0)" },
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 0.8,
          ease: "power2.inOut",
          delay: 0.45,
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return null;
}
