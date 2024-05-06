import { useState, useEffect } from "react";

const useBreakpoints = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const mobileMatch = window.matchMedia("(min-width: 320px)");
      const tabletMatch = window.matchMedia("(min-width: 768px)");
      const desktopMatch = window.matchMedia("(min-width: 1024px)");

      if (desktopMatch.matches) {
        setCurrentBreakpoint("desktop");
      } else if (tabletMatch.matches) {
        setCurrentBreakpoint("tablet");
      } else if (mobileMatch.matches) {
        setCurrentBreakpoint("mobile");
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = currentBreakpoint === "mobile";
  const isTablet = currentBreakpoint === "tablet";
  const isDesktop = currentBreakpoint === "desktop";

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
};

export default useBreakpoints;
