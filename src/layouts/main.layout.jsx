import React from "react";
import Header from "../components/header";
import { useTheme } from "../contexts/theme.context";
import Head from "next/head";

export default function MainLayout({ children }) {
  const theme = useTheme();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>Anissa Nishioka</title>
      </Head>
      <div className={`${theme} appContainer`}>
        <Header></Header>
        <main>{children}</main>
      </div>
    </>
  );
}
