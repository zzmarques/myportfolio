import Title from "../Title";
import { SiReact, SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiGit, SiTypescript } from "react-icons/si";

import { FaSass } from "react-icons/fa6";
import "../../sass/components/_Skills.sass";



const Skills = () => {
    return (
        <section className="container-skills" id="skills">
            <Title>
                <div className="wave-container" data-aos="fade-right">
                    <span>H</span>
                    <span>a</span>
                    <span>b</span>
                    <span>i</span>
                    <span>l</span>
                    <span>i</span>
                    <span>d</span>
                    <span>a</span>
                    <span>d</span>
                    <span>e</span>
                    <span>s</span>
                </div>
            </Title>
            <div className="container-skills-content">

                <div className="container-text-skills">
                    <p data-aos="fade-right" data-aos-delay="100">
                    Eu sou um desenvolvedor <span>front-end</span> com experiência em <span>React</span>, <span>TypeScript</span>, e <span>JavaScript</span>. Tenho uma sólida experiência na criação de interfaces de usuário dinâmicas e eficientes. Além disso, tenho conhecimento sólido em <span>HTML</span>, <span>CSS</span> e <span>Sass</span>, o que me permite garantir design e estilo avançados para as minhas aplicações. Utilizo <span>Bootstrap</span> para desenvolver layouts responsivos de forma rápida e eficaz. Para controle de versão e colaboração, confio em <span>Git</span> e <span>GitHub</span>, o que me ajuda a gerenciar projetos e trabalhar em equipe. Com essas habilidades, sou capaz de criar aplicações web modernas, funcionais e visualmente atraentes.
                    </p>
                </div>

                <div className="container-cards-skills" data-aos="fade-up" >

                    <div className="cards-skills" data-aos="zoom-in-up" data-aos-delay="200">
                        <SiReact className="hab"/>
                    </div>

                    <div className="cards-skills" data-aos="zoom-in-up" data-aos-delay="350">
                        <SiTypescript className="hab"/>
                    </div>

                    <div className="cards-skills" data-aos="zoom-in-up" data-aos-delay="400">
                        <SiJavascript className="hab"/>
                    </div>

                    <div className="cards-skills" data-aos="zoom-in-up" data-aos-delay="500">
                        <SiHtml5 className="hab"/>
                    </div>

                    <div className="cards-skills" data-aos="zoom-in-up" data-aos-delay="600">
                        <SiCss3 className="hab"/>
                    </div>

                    <div className="cards-skills" data-aos="zoom-in-up" data-aos-delay="700">
                        <FaSass className="hab"/>
                    </div>

                    <div className="cards-skills" data-aos="zoom-in-up" data-aos-delay="800">
                        <SiBootstrap className="hab"/>
                    </div>

                    <div className="cards-skills" data-aos="zoom-in-up" data-aos-delay="900">
                        <SiGit className="hab"/>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Skills;