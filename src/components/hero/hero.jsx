import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi , I'm Nadia Aref</h1>
        <p className={styles.description}>
          I'm a front-end Web Developer with good experience in React Js . Reach
          Out if you would like to learn more!
        </p>
        <a href='mailto:nadiaaref639@gmail.com' className={styles.contactbtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl('hero/heroImage.png')}
        alt='hero image of me'
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
