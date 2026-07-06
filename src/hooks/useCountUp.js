import { useEffect, useRef, useState } from "react";

/**
 * useCountUp — Animates a number from 0 to target when in view.
 *
 * @param {number} target - The target number
 * @param {number} duration - Animation duration in ms (default 2000)
 * @param {boolean} start - Whether to start counting
 * @returns {number} The current animated value
 */
export function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!start) return;

    const numericTarget = parseFloat(target);
    if (isNaN(numericTarget)) {
      setCount(target);
      return;
    }

    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * numericTarget));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [start, target, duration]);

  return count;
}
