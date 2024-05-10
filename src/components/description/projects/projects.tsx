import Image from "next/image";
import { useTranslations } from "next-intl";

import { projects } from "./projects.data";

import styles from "./projects.module.css";

const Projects: React.FC = () => {
  const t = useTranslations("Description");

  return (
    <>
      {projects.map((project, index) => {
        return (
          <div
            className={styles["project-card"]}
            key={index}
            onClick={() => window.open(project.url, "_blank")}
          >
            <Image
              className={styles["project-image"]}
              src={project.image}
              alt={project.title}
              width={100}
              height={100}
            />
            <div className={styles["project-details"]}>
              <div>
                <h3> {t(`${project.title}`)}</h3>
                <span className={styles["project-description"]}>
                  {t(`${project.description}`)}
                </span>
                <div className={styles["tag-container"]}>
                  {project.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Projects;
