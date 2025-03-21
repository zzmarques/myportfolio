import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { handleResponsiveScroll } from "../utils/responsiveScroll";

const useAOSObserver = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
          mirror: false,
        });

        handleResponsiveScroll();
    
        const elements = document.querySelectorAll("[data-aos]");
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("aos-animate");
              } else {
                entry.target.classList.remove("aos-animate"); 
                AOS.refresh();
              }
            });
          },
          { threshold: 0.1 }
        );
    
        elements.forEach((el) => observer.observe(el));
    
        return () => {
          elements.forEach((el) => observer.unobserve(el));
        };
      }, []);
};

export default useAOSObserver;