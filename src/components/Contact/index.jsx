import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Title from "../Title";

const Contact = () => {
    return (
        <section className="container-contact">
            <Title>Contato</Title>
            <div className="container-midea-social">

                <div className="cards-midia-social">

                    <div className="container-icon">
                        <MdOutlineEmail  className="icon"/>
                        <span className="titulo">E-mail</span>
                    </div>
                    <span className="subtitulo">walacemarqs@gmail.com</span>
                </div>

                <div className="cards-midia-social">

                    <div className="container-icon">
                        <FaWhatsapp className="icon"/>
                        <span className="titulo">WhatsApp</span>
                    </div>
                    <span className="subtitulo">(32) 998674766</span>
                </div>

                <div className="cards-midia-social">

                    <div className="container-icon">
                        <FaLinkedin className="icon"/>
                        <span className="titulo">LinkedIn</span>
                    </div>
                    <span className="subtitulo">@walacemarques</span>
                </div>

                <div className="cards-midia-social">

                    <div className="container-icon">
                        <FaGithub className="icon"/>
                        <span className="titulo">Github</span>
                    </div>
                    <span className="subtitulo">@zzmarques</span>
                </div>

            </div>
        </section>
    )
}

export default Contact;