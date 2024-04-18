import { useState } from "react";

import styles from "./experiences.module.css";

const Experiences = () => {
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
          Lasts experiences
        </h4>
        <h4
          className={activeTab === "experiences" ? styles["unactive-tab"] : ""}
          onClick={switchTab}
        >
          Formations
        </h4>
      </div>
      <hr />
      {activeTab === "experiences" ? (
        <>
          <div className={styles["experience-card"]}>
            <span className={styles.date}>2023 - Now </span>
            <div className={styles[""]}>
              <h3>Sogeti</h3>
              <h4>Developer</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className={styles["experience-card"]}>
            <span className={styles.date}>2022 - 2023 </span>
            <div className={styles[""]}>
              <h3>Schoolmouv</h3>
              <h4>Developer</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className={styles["experience-card"]}>
            <span className={styles.date}>2021 - 2022 </span>
            <div className={styles[""]}>
              <h3>Voltyo</h3>
              <h4>Developer</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <p>View full Résumé</p>
        </>
      ) : (
        <>
          <div className={styles["experience-card"]}>
            <span className={styles.date}>2022 - 2023 </span>
            <div className={styles[""]}>
              <h3>Wild Code School</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className={styles["experience-card"]}>
            <span className={styles.date}>2021 - 2022 </span>
            <div className={styles[""]}>
              <h3>Wild Code School</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Experiences;
