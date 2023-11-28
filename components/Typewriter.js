import { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setDisplayText((prevText) => prevText + text[index]);
      index++;

      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, 100); // Adjust the interval duration as needed

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [text]);

  return <span>{displayText}</span>;
}
export default Typewriter