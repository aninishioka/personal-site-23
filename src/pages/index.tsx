import Head from "next/head";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <title>Anissa Nishioka</title>
      <header>
        <nav>
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/about">About</a>
        </nav>
      </header>
    </div>
  );
}
