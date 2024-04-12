import React from "react";
import styles from "./menu.module.css";

function Menu() {
  return (
    <menu className={styles.menu}>
      <ul>
        <a href="#about">&#9658; ABOUT</a>
      </ul>
      <ul>
        <a href="#experiences">&#9658; EXPERIENCES</a>
      </ul>
      <ul>
        <a href="#projects">&#9658; PROJECTS</a>
      </ul>
      <ul>
        <a href="#others">&#9658; OTHERS</a>
      </ul>
    </menu>
  );
}

export default Menu;
