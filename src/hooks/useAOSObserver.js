import { useEffect } from "react";
import AOS from "aos";

const useAOSObserver = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false,
          mirror: true,
        });
    
        const elements = document.querySelectorAll("[data-aos]");
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("aos-animate"); // ✅ Ativa a animação
              } else {
                entry.target.classList.remove("aos-animate"); // 🔄 Remove ao sair da tela
                AOS.refresh(); // 🔄 Força atualização do AOS
              }
            });
          },
          { threshold: 0.1 } // Ativa quando 10% do elemento estiver visível
        );
    
        elements.forEach((el) => observer.observe(el));
    
        return () => {
          elements.forEach((el) => observer.unobserve(el));
        };
      }, []);
};

export default useAOSObserver;