import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Smooth scroll animation using rAF with ease-out cubic
    let rafId = 0;
    const startY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const duration = 500; // ms
    if (startY <= 0) return;

    const startTime = performance.now();

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (now: number) => {
      const elapsed = Math.min(1, (now - startTime) / duration);
      const eased = easeOutCubic(elapsed);
      const currentY = Math.round(startY * (1 - eased));

      try {
        window.scrollTo(0, currentY);
      } catch {
        /* ignore */
      }
      document.documentElement.scrollTop = currentY;
      document.body.scrollTop = currentY;

      if (elapsed < 1) {
        rafId = window.requestAnimationFrame(step);
      }
    };

    rafId = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(rafId);
  }, [location.pathname, location.search, location.hash]);

  return null;
};

export default ScrollToTop;
