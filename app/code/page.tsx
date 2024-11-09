import { projectData } from "./data";
import styles from "@/styles/projects-index.module.css";
import ProjectCard from "./components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main>
      <div className={styles.projectsContainer}>
        {projectData.map((project) => (
          <ProjectCard key={project.id} {...project}></ProjectCard>
        ))}
      </div>
    </main>
  );
}
