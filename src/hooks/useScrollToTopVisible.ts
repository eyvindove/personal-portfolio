import { useEffect, useState } from 'react';

export default function useScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  function handleScroll() {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isVisible;
}
