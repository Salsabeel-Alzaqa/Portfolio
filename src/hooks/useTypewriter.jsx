'use client';
import { useState, useEffect } from 'react';

export const useTypewriter = (text) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(i));
        i++;
      } else {
        i = -1;
        setDisplayText('');
      }
    }, 100);
    return () => {
      clearInterval(typingInterval);
    };
  }, [text]);
  return displayText;
};