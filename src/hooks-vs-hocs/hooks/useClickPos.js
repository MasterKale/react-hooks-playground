import { useState, useEffect } from 'react';

/**
 * Store the X and Y coordinates of where the user clicked
 *
 * @returns {object} - Contains `x` and `y` click coordinates
 */
const useClickPos = () => {
  const [clickPos, setClickPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const clickHandler = (event) => {
      setClickPos({ x: event.x, y: event.y });
    };

    // Set an event handler
    window.addEventListener('click', clickHandler);

    // The returned method contains unsubscription logic to undo whatever
    // subscription was added above
    return () => {
      window.removeEventListener('click', clickHandler);
    };
  }, []);

  return clickPos;
};

export default useClickPos;
