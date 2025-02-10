import Title from "../Title";
import { SiReact, SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiGit } from "react-icons/si";
import { FaSass } from "react-icons/fa6";


const Skills = () => {
    return (
        <section className="container-skills">
            <Title>Habilidades</Title>
            <div className="container-cards-skills">

                <div className="cards-skills">
                    <SiReact/>
                </div>

                <div className="cards-skills">
                    <SiJavascript/>
                </div>

                <div className="cards-skills">
                    <SiHtml5/>
                </div>

                <div className="cards-skills">
                    <SiCss3/>
                </div>

                <div className="cards-skills">
                    <FaSass/>
                </div>

                <div className="cards-skills">
                    <SiBootstrap/>
                </div>

                <div className="cards-skills">
                    <SiGit/>
                </div>
            </div>
        </section>
    )
}

export default Skills;