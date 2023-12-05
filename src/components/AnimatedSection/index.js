'use client'
import styles from './AnimatedSection.module.css';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({children}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={`${styles.section} ${inView ? styles.active : ''}`}>
     {children}
    </div>
  );
};

export default AnimatedSection;