"use client";

import { ReactNode, useEffect, useRef } from "react";

interface Props {
  children: string;
  className?: string;
  as?: "h2" | "p" | "div";
  lang?: string;
}

export function HeadlineSplit({
  children,
  className,
  as = "h2",
  lang,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      root
        .querySelectorAll<HTMLSpanElement>(".word-inner")
        .forEach((w) => (w.style.transform = "none"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const words = root.querySelectorAll<HTMLSpanElement>(".word-inner");
          words.forEach((w, i) => {
            w.style.transition = `transform 800ms cubic-bezier(0.25, 0, 0, 1) ${i * 80}ms`;
            w.style.transform = "translateY(0%)";
          });
          io.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(root);
    return () => io.disconnect();
  }, []);

  const Tag = as;
  const words = children.split(" ");

  const content: ReactNode[] = words.map((word, i) => (
    <span
      key={`${word}-${i}`}
      className="inline-block overflow-hidden align-bottom"
    >
      <span
        className="word-inner inline-block"
        style={{ transform: "translateY(110%)", willChange: "transform" }}
      >
        {word}
      </span>
      {i < words.length - 1 ? " " : ""}
    </span>
  ));

  return (
    <Tag ref={ref as never} className={className} lang={lang}>
      {content}
    </Tag>
  );
}
