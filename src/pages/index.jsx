import React from "react";
import styles from "../styles/index.module.css";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Anissa Nishioka" />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://www.aninishioka.com/" />
        <meta
          property="og:description"
          content="Working in healthcare and interested in frontend development."
        />
      </Head>
      <div className={styles.bodyContainer}>
        <div>
          <p>
            Working in healthcare and interested in frontend development.
            <br />
            Currently reading{" "}
            <a
              href="https://www.goodreads.com/book/show/117833.The_Master_and_Margarita"
              target="_blank"
            >
              The Master and the Margarita
            </a>{" "}
            and cooking my way through{" "}
            <a
              href="https://www.harpercollins.com/products/mayumu-abi-balingit"
              target="_blank"
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
    </>
  );
}
