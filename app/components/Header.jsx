"use client";

import React, { useContext } from "react";
import styles from "@/styles/header.module.css";
import Link from "next/link";
import darkApple from "@/public/dark-apple.svg";
import lightApple from "@/public/light-apple.svg";
import Image from "next/image";
import ThemeContext from "@/contexts/themeContext";
import { space_mono } from "app/fonts";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      className={`${space_mono.className} ${styles.header} ${theme}`}
    >
      <nav className={styles.nav}>
        <div>
          <Link href="/" className={styles.homeLink}>
            Anissa Nishioka
          </Link>
        </div>
        <ul className={styles.rightLinks}>
          <li>
            <Link href="/about" className={styles.pageLink}>
              About
            </Link>
          </li>
          <li>
            <Link href="/code" className={styles.pageLink}>
              Code
            </Link>
          </li>
          <li>
            <button className={styles.themeToggle} onClick={toggleTheme}>
              <Image
                src={theme === "light" ? lightApple : darkApple}
                alt="apple icon"
              />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
