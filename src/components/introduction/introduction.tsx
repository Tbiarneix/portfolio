import styles from "./introduction.module.css";
import Menu from "./menu/menu";

function Introduction() {
  return (
    <header className={styles.introduction}>
      <div className={styles.top}>
        <h1>Thomas Biarneix</h1>
        <h2>Frontend Developer</h2>
        <p>
          Passionate about interfaces,user experience, and involved in the
          creation of accessible and eco-responsible applications.
        </p>
       <Menu />
      </div>
      <div className={styles.social}>
        <a href="">LinkedIn</a>
        <a href="">GitHub</a>
      </div>
    </header>
  );
}

export default Introduction;
