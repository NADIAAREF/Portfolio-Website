import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './about.module.css';

export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl('about/aboutImage.png')}
          alt='me sitting with a laptop'
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/cursorIcon.png')} alt='cursor icon' />
            <div className={styles.aboutitemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/python.png')} alt='python icon' />
            <div className={styles.aboutitemText}>
              <h3>Python Programmer</h3>
              <p>
                Developed numerous impressive projects utilizing diverse python
                libraries such as opencv,TensorFlow along with frameworks like
                flask, Django.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/uiIcon.png')} alt='UI icon' />
            <div className={styles.aboutitemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
