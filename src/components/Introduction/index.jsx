import { FaLinkedin, FaGithub } from "react-icons/fa";
import img from '../../../public/assets/imgs/home-main.svg';
import "../../sass/components/_Introduction.sass";


const Introduction = () => {

    return (
        <section className="container-introduction" id="introduction">

            <div className="container-texts">

                <div className="texts__title">

                    <span className="title" data-aos="fade-right"   data-aos-delay="100">Olá! <span className="emoji">👋🏻</span></span>

                    <span className="title" data-aos="fade-right"   data-aos-delay="250">Eu sou <span className="destaque">Walace Marques</span></span>

                    <span className="subtitle" data-aos="fade-right"   data-aos-delay="400">Desenvolvedor Front-End</span>
                    
                </div>

                <div className="social-midia" data-aos="fade-up">
                    <a 
                        href="https://www.linkedin.com/in/walacemarques/" 
                        target="_blank"
                        data-aos="fade-up"
                        data-aos-delay="120"
                    >
                        <FaLinkedin className="icon"/>
                    </a>

                    <a 
                        href="https://github.com/zzmarques" 
                        target="_blank"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <FaGithub className="icon"/>
                    </a>
                    
                </div>

            </div>

            <div className="container-img" data-aos="fade-up" data-aos-delay="300">
                <img src={img} alt="home hero" />
            </div>
        </section>
    )
}

export default Introduction;