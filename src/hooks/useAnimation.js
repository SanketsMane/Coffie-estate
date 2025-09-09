import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};

export const useImageLoad = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const imageElement = ref.current;
    if (!imageElement) return;

    const handleLoad = () => setIsLoaded(true);
    const handleError = () => setIsLoaded(true); // Still show the image even if there's an error

    if (imageElement.complete) {
      setIsLoaded(true);
    } else {
      imageElement.addEventListener('load', handleLoad);
      imageElement.addEventListener('error', handleError);
    }

    return () => {
      imageElement.removeEventListener('load', handleLoad);
      imageElement.removeEventListener('error', handleError);
    };
  }, []);

  return [isLoaded, ref];
};
