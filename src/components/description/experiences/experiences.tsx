import styles from "./experiences.module.css";

const Experiences = () => {
  return (
    <div className={styles["experience-card"]}>
      <span className={styles.date}>2000 - 2013 </span>
      <div className={styles[""]}>
        <h3>Schoolmouv</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default Experiences;
