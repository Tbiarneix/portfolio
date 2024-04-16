"use client";

import styles from "./page.module.css";

import Description from "@/components/description/description";
import Introduction from "@/components/introduction/introduction";

const Home = () => {
  return (
    <div className={styles.home}>
      <Introduction />
      <Description />
    </div>
  );
};

export default Home;
