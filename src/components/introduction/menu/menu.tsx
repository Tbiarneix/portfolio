import React, { useState } from "react";
import { useTranslations } from "next-intl";

import styles from "./menu.module.css";

const Menu = () => {
  const t = useTranslations("Menu");

  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    setActiveLink(event.currentTarget.getAttribute("href"));
  };

  const isActive = (href: string | null) =>
    activeLink === href ? styles["active-link"] : styles["inactive-link"];

  return (
    <menu className={styles.menu}>
      <ul className={isActive("#about")}>
        <a href="#about" onClick={handleClick}>
          &#9658; {t("ABOUT")}
        </a>
      </ul>
      <ul className={isActive("#experiences")}>
        <a href="#experiences" onClick={handleClick}>
          &#9658; {t("EXPERIENCES")}
        </a>
      </ul>
      <ul className={isActive("#projects")}>
        <a href="#projects" onClick={handleClick}>
          &#9658; {t("PROJECTS")}
        </a>
      </ul>
      <ul className={isActive("#others")}>
        <a href="#others" onClick={handleClick}>
          &#9658; {t("OTHERS")}
        </a>
      </ul>
    </menu>
  );
};

export default Menu;
