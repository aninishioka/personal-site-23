import React, { useState } from "react";
import styles from "../styles/project-card.module.css";
import { Space_Mono } from "next/font/google";
import Image from "next/image";

const space_mono = Space_Mono({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function ProjectCard({ title, description, assets, tags }) {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive((prevState) => {
      return !prevState;
    });
  }

  function renderAssets() {
    if (assets === undefined || assets.length == 0) return;
    return (
      <div className={`${styles.assetContainer}`}>
        {assets.map((asset, i) => {
          return (
            <Image
              src={require(`../assets/${asset.src}`)}
              alt={asset.alt}
              key={i}
              width="80%"
              height="100%"
            />
          );
        })}
      </div>
    );
  }

  function renderTags() {
    return tags.join(", ");
  }

  return (
    <div className={`${styles.card}`}>
      <button onClick={handleClick}>
        <div
          className={`
            ${space_mono.className} ${styles.cardTitle} 
            ${active ? styles.cardTitleActive : null}`}
        >
          <h1>{title}</h1>
        </div>
      </button>
      <div className={active ? styles.cardBodyActive : styles.cardBody}>
        <div>Built with {renderTags()}.</div>
        <div>{description}</div>
        {renderAssets()}
      </div>
    </div>
  );
}
