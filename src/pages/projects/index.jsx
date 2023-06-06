import React from "react";
import styles from "../../styles/projects-index.module.css";
import ProjectCard from "../../components/project-card";

export async function getStaticProps() {
  const { projectData } = await import("../../data/project-data.json");
  return {
    props: {
      projectData,
    },
  };
}

export default function ProjectsPage({ projectData }) {
  return (
    <div className={styles.projectsContainer}>
      {projectData.map((project) => (
        <ProjectCard {...project}></ProjectCard>
      ))}
    </div>
  );
}
