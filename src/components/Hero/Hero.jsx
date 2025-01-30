import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Beyond the code - I'm Nithyaveni Ramesh,</h1>
        <p className={styles.description}>
        weaving creativity into every line of work. 
        Fresh graduate fueled by a passion for development, eager to kickstart my IT career. 
        Ready to apply my skills and knowledge to impactful projects.
        </p>
        <a href="mailto:nithyaveni.ramesh28@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};