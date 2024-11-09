"use client";

import React, { useState } from "react";
import styles from "@/styles/project-card.module.css";
import Image from "next/image";
import Link from "next/link";
import { space_mono } from "app/fonts";

export type ProjectAsset = {
  src: string;
  alt: string;
  unoptimized?: boolean;
};

export type ProjectData = {
  id: string;
  title: string;
  description: string;
  assets: ProjectAsset[];
  tags: string[];
  inProgress: boolean;
  github?: string;
};

export default function ProjectCard({
  title,
  description,
  assets,
  tags,
  github,
}: ProjectData) {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive((prevState) => {
      return !prevState;
    });
  }

  function renderAssets() {
    if (assets.length === 0) return;
    return (
      <div className={styles.assetContainer}>
        {assets.map((asset, i) => {
          return (
              <Image
                src={require(`../../../public/${asset.src}`)}
                alt={asset.alt}
                key={asset.src}
                width={0}
                height={0}
                className={styles.asset}
                unoptimized={asset.unoptimized}
              />
          );
        })}
      </div>
    );
  }

  function renderTags() {
    if (tags.length === 0) return;
    return (
      <div className={`${styles.tagContainer}`}>
        {tags.map((t, i) => {
          return (
            <div className={`${styles.tag}`} key={i}>
              {t}
            </div>
          );
        })}
      </div>
    );
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
        <div>
          <p>{description}</p>
          {github ? (
            <p>
              See the code on <Link href={github}>Github</Link>.
            </p>
          ) : null}
        </div>
        <div>{renderTags()}</div>
        {renderAssets()}
      </div>
    </div>
  );
}
