import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Title from "../Title";
import "../../sass/components/_Contact.sass";


const Contact = () => {

    return (
        <section className="container-contact">
            <Title>Contato</Title>
            <div className="container-midia-social">

                <div className="cards-midia-social">

                    <div className="container-icon">
                        <MdOutlineEmail  className="icon"/>
                        <span className="title">E-mail</span>
                    </div>
                    <span className="subtitle">walacemarqs@gmail.com</span>
                </div>

                <div className="cards-midia-social">

                    <div className="container-icon">
                        <FaWhatsapp className="icon"/>
                        <span className="title">WhatsApp</span>
                    </div>
                    <span className="subtitle">(32) 998674766</span>
                </div>

                <div className="cards-midia-social">

                    <div className="container-icon">
                        <FaLinkedin className="icon"/>
                        <span className="title">LinkedIn</span>
                    </div>
                    <span className="subtitle">@walacemarques</span>
                </div>

                <div className="cards-midia-social">

                    <div className="container-icon">
                        <FaGithub className="icon"/>
                        <span className="title">Github</span>
                    </div>
                    <span className="subtitle">@zzmarques</span>
                </div>

            </div>
        </section>
    )
}

export default Contact;