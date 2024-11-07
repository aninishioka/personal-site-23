"use client";

import { useContext } from "react";
import styles from "@/styles/index.module.css";
import ThemeContext from "@/contexts/themeContext";

export default function HomePage() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`${styles.bodyContainer} ${theme}`}>
      <div>
        <div>
          <p>Full stack software engineer.</p>
          {/* <p>
            Let's chat! {" "}
            <a href="mailto:ani.nishioka@gmail.com">ani.nishioka@gmail.com</a>
          </p> */}
        </div>
      </div>
    </main>
  );
}
