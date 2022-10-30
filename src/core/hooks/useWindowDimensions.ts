import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { width, height } = window.visualViewport;
  const contentHeight = (height / 100) * 92;
  const navbarHeight = (height / 100) * 8;
  return {
    width,
    height,
    contentHeight,
    navbarHeight,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
