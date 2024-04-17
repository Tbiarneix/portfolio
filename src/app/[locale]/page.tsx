"use client";

import type { NextPage } from "next";
import styles from "./page.module.css";

import Description from "@/components/description/description";
import Introduction from "@/components/introduction/introduction";

const Home : NextPage = () => {
  return (
    <div className={styles.home}>
      <Introduction />
      <Description />
    </div>
  );
};

export default Home;