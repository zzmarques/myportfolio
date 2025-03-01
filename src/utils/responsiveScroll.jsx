
export const handleResponsiveScroll = () => {
    const cardsSocialMida = document.querySelectorAll('.cards-midia-social');

    
    console.log(cardsSocialMida)
    if (window.innerWidth >= 1024 && cardsSocialMida.length > 0) {
        cardsSocialMida.forEach(el => {
            el.removeAttribute("data-aos");

            if (el?.classList.contains("email")) {
                el.setAttribute("data-aos", "fade-down")

            } else if (el?.classList.contains("whatsapp")) {
                el.setAttribute("data-aos", "fade-up")

            } else if (el?.classList.contains("linkedin")) {
                el.setAttribute("data-aos", "fade-down")
            } else {
                el.setAttribute("data-aos", "fade-up")
            }

        });


    }
}