"use client";

import { useEffect, useState } from "react";
import styles from "./Typewriter.module.scss";

type Props = {
  phrases: string[];
  typingSpeed?: number; 
  deletingSpeed?: number; 
  pauseTime?: number; 
};

export default function Typewriter({
  phrases,
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseTime = 1100,
}: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];
    if (!deleting) {
      if (text.length < current.length) {
        const t = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setDeleting(true), pauseTime);
        return () => clearTimeout(t);
      }
    } else {
      if (text.length > 0) {
        const t = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeed);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      }
    }
  }, [text, deleting, index, phrases, typingSpeed, deletingSpeed, pauseTime]);

  useEffect(() => {
    setIndex(0);
    setText("");
    setDeleting(false);
  }, [phrases.length]);

  return (
    <span>
      {text}
      <span className={styles.caret} aria-hidden="true" />
    </span>
  );
}
