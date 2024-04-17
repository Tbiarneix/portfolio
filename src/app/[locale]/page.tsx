"use client";

import type { NextPage } from "next";

import Description from "@/components/description/description";
import Introduction from "@/components/introduction/introduction";

import styles from "./page.module.css";

const Home : NextPage = () => {
  return (
    <div className={styles.home}>
      <Introduction />
      <Description />
    </div>
  );
};

export default Home;