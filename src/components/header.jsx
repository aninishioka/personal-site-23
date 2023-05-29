import React from "react";
import styles from "../styles/header.module.css";
import { Space_Mono } from "next/font/google";
import { useTheme, useThemeUpdate } from "../contexts/theme.context";
import Link from "next/link";
import darkApple from "../assets/dark-apple.svg";
import lightApple from "../assets/light-apple.svg";
import Image from "next/image";

const space_mono = Space_Mono({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Header() {
  const theme = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <header className={`${space_mono.className} ${styles.header}`}>
      <nav className={styles.nav}>
        <div>
          <Link href="/" className={styles.homeLink}>
            Anissa Nishioka
          </Link>
        </div>
        <ul className={styles.rightLinks}>
          <li>
            <Link href="/projects" className={styles.pageLink}>
              Code
            </Link>
          </li>
          <li>
            <button className={styles.themeToggle} onClick={toggleTheme}>
              <Image
                src={theme == "light" ? lightApple : darkApple}
                alt="apple icon"
              />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
