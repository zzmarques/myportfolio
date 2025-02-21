import { SiReact, SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiGit } from "react-icons/si";
import { FaSass } from "react-icons/fa6";
import img from "../../../public/assets/imgs/imagem-branca.png"
import "../../sass/components/_CardProject.sass";


const CardProject = () => {
    return (
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
    )
}

export default CardProject;