import React, { useEffect, useRef } from 'react';
import Scrambler from 'scramble-text';

const ScrambleText = ({ text }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const scrambler = new Scrambler();
      scrambler.scramble(textRef.current, text);
    }
  }, [text]);

  return <span ref={textRef}></span>;
};

export default ScrambleText;
