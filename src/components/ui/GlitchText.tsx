import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  trigger?: boolean;
}

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_#@%&<>[]{}/=+*~';

export const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '', trigger = true }) => {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    if (!trigger) return;

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(() =>
        text
          .split('')
          .map((letter, index) => {
            if (letter === ' ') return ' ';
            if (index < iteration) {
              return text[index];
            }
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2;
    }, 25);

    return () => clearInterval(interval);
  }, [text, trigger]);

  return <span className={`font-mono ${className}`}>{displayText}</span>;
};
