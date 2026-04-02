/**
 * PageBackground — sets the bioluminescent bgfor.png as the HTML root background.
 *
 * Instead of fighting z-index / stacking context issues, this component
 * adds a CSS class to <html> that applies the background image, then
 * removes it when the component unmounts (navigating away).
 *
 * The class "pandora-page-bg" is defined in index.css.
 */
import { useEffect } from "react";

const PageBackground = () => {
  useEffect(() => {
    // Add class to html element when page mounts
    document.documentElement.classList.add("pandora-page-bg");
    return () => {
      // Remove class when navigating away from this page
      document.documentElement.classList.remove("pandora-page-bg");
    };
  }, []);

  return null; // No DOM output — styling via html class
};

export default PageBackground;
