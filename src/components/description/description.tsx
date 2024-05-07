import { useTranslations } from "next-intl";

import Experiences from "./experiences/experiences";
import Projects from "./projects/projects";
import Others from "./others/others";

import styles from "./description.module.css";

const Description = () => {
  const t = useTranslations("Description");

  return (
    <main className={styles.description}>
      <section id="about" className={styles.about}>
        <p>{t("ABOUT.FIRST")}</p>
        <p>{t("ABOUT.SECOND")}</p>
        <p>{t("ABOUT.THIRD")}</p>
      </section>
      <section id="experiences">
        <Experiences />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="others">
        <Others />
      </section>
    </main>
  );
};

export default Description;
