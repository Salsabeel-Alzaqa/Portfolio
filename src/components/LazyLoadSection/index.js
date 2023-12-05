'use client'
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
const LazyLoadSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return <div ref={ref} className={isVisible ? 'visible' : ''}>{children}</div>;
};

export default LazyLoadSection;