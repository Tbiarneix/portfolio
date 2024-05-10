import { useState } from "react";
import { useTranslations } from "next-intl";

import { lastsExperiences } from "./last-experiences.data";
import { formations } from "./formations.data";

import styles from "./experiences.module.css";
import { MoveUpRight } from "lucide-react";

const Experiences: React.FC = () => {
  const tDescription = useTranslations("Description");
  const tCommon = useTranslations("Common");
  const [activeTab, setActiveTab] = useState("experiences");

  const switchTab = () => {
    if (activeTab === "experiences") {
      setActiveTab("formations");
    } else {
      setActiveTab("experiences");
    }
  };

  return (
    <div>
      <div className={styles.tab}>
        <h4
          className={activeTab === "formations" ? styles["unactive-tab"] : ""}
          onClick={switchTab}
        >
          {tDescription("EXPERIENCES.EXPERIENCES_TITLE")}
        </h4>
        <h4
          className={activeTab === "experiences" ? styles["unactive-tab"] : ""}
          onClick={switchTab}
        >
          {tDescription("FORMATIONS.FORMATIONS_TITLE")}
        </h4>
      </div>
      <hr />
      {activeTab === "experiences" ? (
        <>
          {lastsExperiences.map((experience, index) => (
            <div
              className={styles.card}
              key={index}
              onClick={() => window.open(experience.url, "_blank")}
            >
              <span className={styles["job-date"]}>{experience.date}</span>
              <div className={styles.job}>
                <div>
                  <h3>{experience.compagny}</h3>
                  <span className={styles["job-details"]}>
                    {tDescription(`${experience.title}`)}
                  </span>
                </div>
                <div className={styles["tag-container"]}>
                  {experience.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          {formations.map((formations, index) => (
            <div
              className={styles.card}
              key={index}
              onClick={() => window.open(formations.url, "_blank")}
            >
              <span className={styles["job-date"]}>{formations.date}</span>
              <div className={styles.job}>
                <div>
                  <h3>{tDescription(`${formations.title}`)}</h3>
                  <span className={styles["job-details"]}>
                    {formations.compagny}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
      <p className={styles.resume}>
        <a href="/Thomas Biarneix - CV.pdf" target="_blank">
          {tCommon("RESUME")}
          <MoveUpRight className={styles.arrow} size={16} />
        </a>
      </p>
    </div>
  );
};

export default Experiences;
