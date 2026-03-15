import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.name}>Shreyash Mishra</span>
        <div className={styles.socials}>
          <a
            href="https://www.linkedin.com/in/shreyashmishraa/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={styles.icon}
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/shreyashmishra"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={styles.icon}
          >
            <FaGithub />
          </a>
        </div>
        <span className={styles.copy}>© 2026 Shreyash Mishra</span>
      </div>
    </footer>
  );
}
