import { useTranslations } from "next-intl";

import Experiences from "./experiences/experiences";
import Others from "./others/others";

import styles from "./description.module.css";

const Description = () => {
  const t = useTranslations("Description");
  // const handleScroll = () => {
  //     const scrollPosition = window.scrollY; // => scroll position
  //     console.log(scrollPosition);
  // };
  // handleScroll();
  // useEffect(() => {
  //   handleScroll();
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  //   }, []);

  return (
    <main className={styles.description}>
      <section id="about" className={styles.about}>
        <p>{t("ABOUT.FIRST")}</p>
        <p>{t("ABOUT.SECOND")}</p>
        <p>{t("ABOUT.THIRD")}</p>
        <p>{t("ABOUT.FOURTH")}</p>
      </section>
      <section id="experiences">
        <Experiences />
      </section>
      <section id="projects"></section>
      <section id="others">
        <Others />
      </section>
    </main>
  );
};

export default Description;
