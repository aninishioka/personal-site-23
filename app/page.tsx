"use client";

import { useContext } from "react";
import styles from "../styles/index.module.css";
import ThemeContext from "../contexts/themeContext";

export default function HomePage() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`${styles.bodyContainer} ${theme}`}>
      <div>
        <div>
          <p>
            Working in healthcare and interested in frontend development.
            <br />
            Currently reading{" "}
            <a
              href="https://www.goodreads.com/book/show/117833.The_Master_and_Margarita"
              target="_blank"
              rel="noreferrer"
            >
              The Master and the Margarita
            </a>{" "}
            and cooking my way through{" "}
            <a
              href="https://www.harpercollins.com/products/mayumu-abi-balingit"
              target="_blank"
              rel="noreferrer"
            >
              Mayumu
            </a>
            .
          </p>
          <p>
            Let's chat!{" "}
            <a href="mailto:ani.nishioka@gmail.com">ani.nishioka@gmail.com</a>
          </p>
        </div>
      </div>
    </main>
  );
}
