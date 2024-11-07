"use client";

import { useContext } from "react";
import { projectData } from "./data";
import styles from "@/styles/projects-index.module.css";
import ThemeContext from "@/contexts/themeContext";
import ProjectCard from "./components/ProjectCard";

export default function ProjectsPage() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`${theme}`}>
      <div className={styles.projectsContainer}>
        {projectData.map((project) => (
          <ProjectCard key={project.id} {...project}></ProjectCard>
        ))}
      </div>
    </main>
  );
}
