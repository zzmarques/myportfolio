import { SiReact, SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiGit } from "react-icons/si";
import { FaSass } from "react-icons/fa6";
import Title from "../Title";
import img from "../../../public/assets/imgs/imagem-branca.png"

const Projects = () => {
    return (
        <section className="container-projects">
            <Title>Projetos</Title>
            <div className="container-cards-projects">

                <div className="cards">

                    <div className="container-img">
                        <img src={img} alt="Foto Projeto"/>
                    </div>

                    <div className="">
                        <div className="title">
                            <span>Teste</span>
                        </div>
                        <div className="tecs">
                            <SiReact/>
                            <SiJavascript/>
                            <FaSass/>
                            <SiBootstrap/>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Projects;