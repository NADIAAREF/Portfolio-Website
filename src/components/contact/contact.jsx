import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './contact.module.css';

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.text}>
        <h2>CONTACT</h2>
        <p>feel free to reach out!! </p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl('contact/emailIcon.png')} alt='email icon' />
          <a href='mailto:nadiaaref639@gmail.com'> nadiaaref639@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl('contact/linkedinIcon.png')}
            alt='linkedin icon'
          />
          <a href='https://www.linkedin.com/in/nadia-aref-369206201/'>
            Linkedln
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl('contact/githubIcon.png')} alt='github icon' />
          <a href='https://github.com/NADIAAREF'> Github</a>
        </li>
      </ul>
    </footer>
  );
};
