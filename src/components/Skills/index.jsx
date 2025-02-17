import Title from "../Title";
import { SiReact, SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiGit } from "react-icons/si";
import { FaSass } from "react-icons/fa6";
import "../../sass/components/_Skills.sass";



const Skills = () => {
    return (
        <section className="container-skills">
            <Title>Habilidades</Title>
            <div className="container-text-skills">
                <p>
                    Sou um desenvolvedor web com habilidades sólidas em HTML5, CSS3, JavaScript, React, Sass e Bootstrap. Tenho experiência em criar soluções web inovadoras que são otimizadas para uma variedade de dispositivos. Meu foco está sempre em manter-me atualizado com as últimas tendências e melhores práticas do setor para garantir que meus projetos sejam eficientes e de ponta. Além de aperfeiçoar minhas habilidades atuais, estou sempre em busca de novos conhecimentos em ferramentas e tecnologias emergentes para ampliar meu repertório. Estou comprometido com o aprendizado contínuo e acredito que diversificar minhas habilidades é essencial para me tornar um desenvolvedor cada vez mais completo e versátil.
                </p>
            </div>
            <div className="container-cards-skills">

                <div className="cards-skills">
                    <SiReact className="hab"/>
                </div>

                <div className="cards-skills">
                    <SiJavascript className="hab"/>
                </div>

                <div className="cards-skills">
                    <SiHtml5 className="hab"/>
                </div>

                <div className="cards-skills">
                    <SiCss3 className="hab"/>
                </div>

                <div className="cards-skills">
                    <FaSass className="hab"/>
                </div>

                <div className="cards-skills">
                    <SiBootstrap className="hab"/>
                </div>

                <div className="cards-skills">
                    <SiGit className="hab"/>
                </div>
            </div>
        </section>
    )
}

export default Skills;