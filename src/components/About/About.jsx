import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Developer</h3>
              <p>
                I'm a full-stack developer with hands-on experience in building scalable web applications using React, Node.js, Django, and MongoDB. I’ve contributed to platforms like Shoonya and Anudesh, enhancing performance and user experience.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Machine Learning Enthusiast</h3>
              <p>
                I’ve worked on AI-driven projects including stress detection using EEG signals and emotion analysis from social media text. My work involves building data pipelines, preprocessing, and training high-accuracy models using Python and Scikit-learn.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Community icon" />
            <div className={styles.aboutItemText}>
              <h3>Tech Community Contributor</h3>
              <p>
                As a core member of GDSC, I’ve led web development initiatives, designed events, and mentored peers. I enjoy collaborating and sharing knowledge through tech communities.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
