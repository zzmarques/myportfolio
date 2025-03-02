import { SiReact, SiJavascript, SiHtml5, SiCss3, SiBootstrap } from "react-icons/si";
import { FaSass } from "react-icons/fa6";
import "../../sass/components/_CardProject.sass";


const CardProject = ({ name, technologies, img }) => {


    

    return (
        <div className="cards">
        
            <div className="container-img">
                <img src={img} alt={name}/>
            </div>

            <div className="cabecalho">
                <div className="title">
                    <span>{name}</span>
                </div>
                {
                    <div className="tecs">
                        {technologies.map((tec, i) => (
                                tec === "React" ? <SiReact/> 
                                : tec === "JavaScript" ? < SiJavascript/>
                                : tec === "SASS" ? <FaSass/>
                                : tec === "HTML" ? <SiHtml5/>
                                : tec === "CSS"  ? <SiCss3/>
                                : ""
                            ))
                        }
                    </div>
                }
                
            </div>
        
        </div>
    )
}

export default CardProject;