import { useEffect, useState } from 'react';

export const useGetWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    if (typeof window !== undefined) {
      const handleSetWidowSize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };
      handleSetWidowSize();

      window.addEventListener('DOMContentLoaded', handleSetWidowSize);
      return () =>
        window.removeEventListener('DOMContentLoaded', handleSetWidowSize);
    }
  }, []);

  return { windowSize };
};
