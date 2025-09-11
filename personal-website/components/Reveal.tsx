"use client";

import { useEffect, useRef, useState, PropsWithChildren } from "react";
import cls from "./Reveal.module.scss";

type Direction = "left" | "right" | "up" | "none";

type Props = {
  direction?: Direction;
  threshold?: number;
  margin?: string;
  delayMs?: number;
  className?: string;
};

export default function Reveal({
  children,
  direction = "none",
  threshold = 0.15,
  margin = "0px 0px -10% 0px",
  delayMs = 0,
  className,
}: PropsWithChildren<Props>) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold, rootMargin: margin }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [threshold, margin]);

  const classes = [cls.reveal];
  if (direction === "left") classes.push(cls.left);
  else if (direction === "right") classes.push(cls.right);
  if (visible) classes.push(cls.visible);
  if (className) classes.push(className);

  const style = delayMs && visible ? ({ transitionDelay: `${delayMs}ms` } as const) : undefined;

  return (
    <div ref={ref} className={classes.join(" ")} style={style}>
      {children}
    </div>
  );
}

