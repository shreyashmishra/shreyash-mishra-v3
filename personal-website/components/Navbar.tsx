"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";

const NAV_LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <Link href="#home" className={styles.logo} onClick={close}>
            SM
          </Link>

          <div className={styles.links}>
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className={styles.link}>
                {l.label}
              </Link>
            ))}
          </div>

          <button
            className={`${styles.hamburger} ${open ? styles.open : ""}`}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}>
        <Link href="#home" className={styles.mobileLink} onClick={close}>
          Home
        </Link>
        {NAV_LINKS.map((l) => (
          <Link key={l.href} href={l.href} className={styles.mobileLink} onClick={close}>
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
