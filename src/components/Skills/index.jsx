import Title from "../Title";
import { SiReact, SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiGit } from "react-icons/si";
import { FaSass } from "react-icons/fa6";
import "../../sass/components/_Skills.sass";



const Skills = () => {
    return (
        <section className="container-skills">
            <Title>Habilidades</Title>
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