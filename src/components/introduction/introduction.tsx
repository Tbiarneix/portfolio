"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

import githubLogoWhite from "/src/assets/github-logo-blanc.png";
import linkedinLogoWhite from "/src/assets/linkedin-logo-blanc.png";

import styles from "./introduction.module.css";
import LanguageSwitcher from "./language-switcher/LanguageSwitcher";

const Introduction: React.FC = () => {
  const t = useTranslations("Introduction");

  return (
    <header id="header" className={styles.introduction}>
      <div className={styles.top}>
        <h1>{t("SITE_NAME")}</h1>
        <h2>{t("JOB_TITLE")}</h2>
        <p>{t("INTRODUCTION")}</p>
        <div>
          <LanguageSwitcher />
        </div>
      </div>
      <div>
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
      </div>
    </header>
  );
};

export default Introduction;
