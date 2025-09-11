import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navbar__inner}>
          <div className={styles.navbar__links}>
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#projects">Projects</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
