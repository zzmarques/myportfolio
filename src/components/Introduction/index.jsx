import { FaLinkedin, FaGithub } from "react-icons/fa";
import img from '../../../public/assets/imgs/home-main.svg';

const Introduction = () => {

    return (
        <section className="container-introduction">
            <div className="container-texts">
                <div className="texts__title">
                    <span className="title">Olá!👋🏻</span>
                    <span className="title">Eu sou <span className="destaque">Walace Marques</span></span>
                    <span className="subtitle">Desenvolvedor Front-End</span>
                </div>
                <div className="social-midia">
                    <FaLinkedin />
                    <FaGithub />
                </div>
            </div>
            <div className="container-img">
                <img src={img} alt="home hero" />
            </div>
        </section>
    )
}

export default Introduction;