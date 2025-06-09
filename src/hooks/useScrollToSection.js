import { useNavigate, useLocation } from "react-router-dom";
import { useCallback } from "react";

/**
 * Custom hook for smooth scrolling to sections
 * @returns {Function} scrollToSection - Function to scroll to a section
 */
const useScrollToSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = useCallback(
    (sectionId) => {
      // If we're not on the home page, navigate to home first
      if (location.pathname !== "/") {
        navigate("/");
        // Use setTimeout to wait for the navigation to complete
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // If we're already on the home page, just scroll to the section
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    [navigate, location.pathname]
  );

  return scrollToSection;
};

export default useScrollToSection;
