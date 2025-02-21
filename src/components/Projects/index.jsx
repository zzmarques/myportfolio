import { SiReact, SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiGit } from "react-icons/si";
import { FaSass } from "react-icons/fa6";
import Title from "../Title";
import img from "../../../public/assets/imgs/imagem-branca.png"
import "../../sass/components/_Projects.sass";


const Projects = () => {
    return (
        <section className="container-projects">
            <Title>
                <div className="wave-container">
                    <span>P</span>
                    <span>r</span>
                    <span>o</span>
                    <span>j</span>
                    <span>e</span>
                    <span>t</span>
                    <span>o</span>
                    <span>s</span>
                </div>
            </Title>
            <div className="container-cards-projects">

                <div className="cards">

                    <div className="container-img">
                        <img src={img} alt="Foto Projeto"/>
                    </div>

                    <div className="cabecalho">
                        <div className="title">
                            <span>Teste</span>
                        </div>
                        <div className="tecs">
                            <SiReact className="icons"/>
                            <SiJavascript className="icons"/>
                            <FaSass className="icons"/>
                            <SiBootstrap className="icons"/>
                        </div>
                    </div>

                </div>

                <div className="cards">

                    <div className="container-img">
                        <img src={img} alt="Foto Projeto"/>
                    </div>

                    <div className="cabecalho">
                        <div className="title">
                            <span>Teste</span>
                        </div>
                        <div className="tecs">
                            <SiReact className="icons"/>
                            <SiJavascript className="icons"/>
                            <FaSass className="icons"/>
                            <SiBootstrap className="icons"/>
                        </div>
                    </div>

                </div>

                <div className="cards">

                    <div className="container-img">
                        <img src={img} alt="Foto Projeto"/>
                    </div>

                    <div className="cabecalho">
                        <div className="title">
                            <span>Teste</span>
                        </div>
                        <div className="tecs">
                            <SiReact className="icons"/>
                            <SiJavascript className="icons"/>
                            <FaSass className="icons"/>
                            <SiBootstrap className="icons"/>
                        </div>
                    </div>

                </div>

                <div className="cards">

                    <div className="container-img">
                        <img src={img} alt="Foto Projeto"/>
                    </div>

                    <div className="cabecalho">
                        <div className="title">
                            <span>Teste</span>
                        </div>
                        <div className="tecs">
                            <SiReact className="icons"/>
                            <SiJavascript className="icons"/>
                            <FaSass className="icons"/>
                            <SiBootstrap className="icons"/>
                        </div>
                    </div>

                </div>

                <div className="cards">

                    <div className="container-img">
                        <img src={img} alt="Foto Projeto"/>
                    </div>

                    <div className="cabecalho">
                        <div className="title">
                            <span>Teste</span>
                        </div>
                        <div className="tecs">
                            <SiReact className="icons"/>
                            <SiJavascript className="icons"/>
                            <FaSass className="icons"/>
                            <SiBootstrap className="icons"/>
                        </div>
                    </div>

                </div>

                <div className="cards">

                    <div className="container-img">
                        <img src={img} alt="Foto Projeto"/>
                    </div>

                    <div className="cabecalho">
                        <div className="title">
                            <span>Teste</span>
                        </div>
                        <div className="tecs">
                            <SiReact className="icons"/>
                            <SiJavascript className="icons"/>
                            <FaSass className="icons"/>
                            <SiBootstrap className="icons"/>
                        </div>
                    </div>

                </div>

                <div className="cards">

                    <div className="container-img">
                        <img src={img} alt="Foto Projeto"/>
                    </div>

                    <div className="cabecalho">
                        <div className="title">
                            <span>Teste</span>
                        </div>
                        <div className="tecs">
                            <SiReact className="icons"/>
                            <SiJavascript className="icons"/>
                            <FaSass className="icons"/>
                            <SiBootstrap className="icons"/>
                        </div>
                    </div>

                </div>

                <div className="cards">

                    <div className="container-img">
                        <img src={img} alt="Foto Projeto"/>
                    </div>

                    <div className="cabecalho">
                        <div className="title">
                            <span>Teste</span>
                        </div>
                        <div className="tecs">
                            <SiReact className="icons"/>
                            <SiJavascript className="icons"/>
                            <FaSass className="icons"/>
                            <SiBootstrap className="icons"/>
                        </div>
                    </div>

                </div>

                <div className="cards">

                    <div className="container-img">
                        <img src={img} alt="Foto Projeto"/>
                    </div>

                    <div className="cabecalho">
                        <div className="title">
                            <span>Teste</span>
                        </div>
                        <div className="tecs">
                            <SiReact className="icons"/>
                            <SiJavascript className="icons"/>
                            <FaSass className="icons"/>
                            <SiBootstrap className="icons"/>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Projects;