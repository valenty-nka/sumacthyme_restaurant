import { useEffect, useState, useRef } from "react";

export function useScrollFadeUp({ threshold = 0.2, delay = 0, duration = 1000, distance = 20 } = {}) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, delay]);

  // Return both ref and styles for inline usage if needed
  const style = {
    transform: isVisible ? "translateY(0)" : `translateY(${distance}px)`,
    opacity: isVisible ? 1 : 0,
    transition: `all ${duration}ms ease-out`,
  };

  return [ref, style, isVisible];
}
