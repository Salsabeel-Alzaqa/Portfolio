'use client'
import styles from './skills.module.css';
import { useInView } from 'react-intersection-observer';

const ProgrammingSkills = [
  { label: 'HTML', percent: 90 },
  { label: 'CSS', percent: 80 },
  { label: 'JavaScript', percent: 75 },
  { label: 'React', percent: 72 },
  { label: 'C++', percent: 75 },
  { label: 'Java', percent: 60 },
];

const Skill = ({ label, percent }) => {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className={styles['programming-skill']}>
      <div className={styles['skill-label']}>
        <h6>{label}</h6>
        <h6>{percent}%</h6>
      </div>
      <div className={`${styles['skill-progress']} ${inView ? styles.active : ''}`}>
        <div style={{ width: inView ? `${percent}%` : '0' }} className={styles['progress-bar']}></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className={styles['skill-container']}>
      {ProgrammingSkills.map((skill, index) => (
        <Skill key={index} label={skill.label} percent={skill.percent} />
      ))}
    </div>
  );
};

export default Skills;
