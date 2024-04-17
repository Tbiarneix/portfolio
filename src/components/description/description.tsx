import { useTranslations } from "next-intl";

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
      <section id="about">
        <p>{t("ABOUT")}</p>
      </section>
      <section id="experiences">
        <p>{t("ABOUT")}</p>
      </section>
      <section id="projects">
        <p>{t("ABOUT")}</p>
      </section>
      <section id="others">
        <Others />
      </section>
    </main>
  );
};

export default Description;
