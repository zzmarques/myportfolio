import { FaLinkedin, FaGithub } from "react-icons/fa";
import img from '../../../public/assets/imgs/home-main.svg';

const Introduction = () => {

    return (
        <section>
            <div>
                <div>
                    <span>Olá!👋🏻</span>
                    <span>Eu sou Walace Marques</span>
                    <span>Desenvolvedor Front-End</span>
                </div>
                <div>
                    <FaLinkedin />
                    <FaGithub />
                </div>
            </div>
            <div>
                <img src={img} alt="home hero" />
            </div>
        </section>
    )
}

export default Introduction;