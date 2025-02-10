import Title from "../Title";
import { SiReact, SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiGit } from "react-icons/si";
import { FaSass } from "react-icons/fa6";


const Skills = () => {
    return (
        <section>
            <Title>Habilidades</Title>
            <div>
                <div>
                    <SiReact/>
                </div>
                <div>
                    <SiJavascript/>
                </div>
                <div>
                    <SiHtml5/>
                </div>
                <div>
                    <SiCss3/>
                </div>
                <div>
                    <FaSass/>
                </div>
                <div>
                    <SiBootstrap/>
                </div>
                <div>
                    <SiGit/>
                </div>
            </div>
        </section>
    )
}

export default Skills;