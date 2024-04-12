import { useEffect, useState } from "react";
import styles from "./introduction.module.css";

import Image from "next/image";
import Menu from "./menu/menu";

import githubLogoWhite from "/src/assets/github-logo-blanc.png";
import linkedinLogoWhite from "/src/assets/linkedin-logo-blanc.png";

function Introduction() {
  return (
    <header id="header" className={styles.introduction}>
      <div className={styles.top}>
        <h1>Thomas Biarneix</h1>
        <h2>Frontend Developer</h2>
        <p>
          Passionate about interfaces, user experience, and involved in the
          creation of accessible and eco-responsible applications.
        </p>
        <Menu />
      </div>
      <div className={styles.social}>
        <a href="https://github.com/Tbiarneix" target="_blank">
          <Image
            src={githubLogoWhite}
            alt="GitHub logo"
            width={32}
            height={32}
          />
        </a>
        <a href="https://www.linkedin.com/in/tbiarneix/" target="_blank">
          <Image
            src={linkedinLogoWhite}
            alt="LinkedIn logo"
            width={32}
            height={32}
          />
        </a>
      </div>
    </header>
  );
}

export default Introduction;
