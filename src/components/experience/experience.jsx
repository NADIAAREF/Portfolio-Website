import React from 'react';
import styles from './experience.module.css';
import skills from '../../data/skills.json';
import history from '../../data/history.json';
import { getImageUrl } from '../../utils';
export const Experience = () => {
  return (
    <section className={styles.container} id='experience'>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skills, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skills.imageSrc)} alt={skills.title} />
                </div>
                <p>{skills.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyitem, id) => {
            return (
              <li key={id} className={styles.historyitem}>
                <img
                  src={getImageUrl(historyitem.imageSrc)}
                  alt={`${historyitem.organisation}Logo`}
                />
                <div className={styles.historyitemDetails}>
                  <h3>{`${historyitem.role},${historyitem.organisation}`}</h3>
                  <p>{`${historyitem.startDate},${historyitem.endDate}`}</p>
                  <ul>
                    {historyitem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
