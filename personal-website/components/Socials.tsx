import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import styles from "./Socials.module.scss";

export default function Socials() {
  return (
    <div className={styles.socials} aria-label="Social links">
      <Link
        className={styles.link}
        href="https://www.linkedin.com/in/shreyashmishraa/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
      >
        <FaLinkedinIn />
      </Link>
      <Link
        className={styles.link}
        href="https://github.com/shreyashmishra"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
      >
        <FaGithub />
      </Link>
    </div>
  );
}
