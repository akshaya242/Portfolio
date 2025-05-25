import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Akshayasree</h1>
        <p className={styles.description}>
          I'm a full-stack developer intern with experience in React, Node.js, and Django. Passionate about building scalable web applications and data-driven projects.
          Reach out if you'd like to connect!
        </p>
        <a href="mailto:akshayasree224@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/akshaya.svg")}
        alt="Hero image of Akshayasree"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
