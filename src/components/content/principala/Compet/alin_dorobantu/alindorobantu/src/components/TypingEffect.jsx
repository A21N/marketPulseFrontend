import React, { useState, useEffect, useCallback, useMemo } from 'react';
import '../css/typingeffect.css'; // Ensure this path is correct

export const TypingEffect = () => {
  // Memoize the texts array to avoid recreation on each render
  const texts = useMemo(() => ['Frontend Developer', 'Programmer'], []);
  const [currentText, setCurrentText] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingDelay = 150;
  const erasingDelay = 100;
  const newTextDelay = 1000; // Delay between typing and erasing

  // Function to handle typing logic
  const handleTyping = useCallback(() => {
    if (isDeleting) {
      if (charIndex > 0) {
        // Erase characters
        setCharIndex((prev) => prev - 1);
      } else {
        // Once the text is completely erased, move to the next text
        setIsDeleting(false);
        setCurrentText((prev) => (prev + 1) % texts.length);
      }
    } else {
      if (charIndex < texts[currentText].length) {
        // Type characters
        setCharIndex((prev) => prev + 1);
      } else {
        // After typing is done, prepare to erase
        setTimeout(() => setIsDeleting(true), newTextDelay);
      }
    }
  }, [charIndex, currentText, isDeleting, texts]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleTyping();
    }, isDeleting ? erasingDelay : typingDelay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, handleTyping, typingDelay, erasingDelay]);

  return (
    <div id="container-line">
      <div id="typing-container">
        {texts[currentText].substring(0, charIndex)}
      </div>
      <span className='repeated'>|</span>
    </div>
  );
};
