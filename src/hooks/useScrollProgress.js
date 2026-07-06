import { useRef, useEffect, useState } from "react";

/**
 * useScrollProgress — Returns scroll progress (0-1) of an element in viewport.
 */
export function useScrollProgress() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      const p = Math.max(0, Math.min(1, (windowH - rect.top) / (windowH + rect.height)));
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { ref, progress };
}
