import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Title from "../Title";

const Contact = () => {
    return (
        <section>
            <Title>Contato</Title>
            <div>

                <div>

                    <div>
                        <MdOutlineEmail />
                        <span>E-mail</span>
                    </div>
                    <span>walacemarqs@gmail.com</span>
                </div>

                <div>

                    <div>
                        <FaWhatsapp />
                        <span>WhatsApp</span>
                    </div>
                    <span>(32) 998674766</span>
                </div>

                <div>
                    <div>
                        <FaLinkedin/>
                        <span>LinkedIn</span>
                    </div>
                    <span>@walacemarques</span>
                </div>

                <div>
                    <div>
                        <FaGithub/>
                        <span>Github</span>
                    </div>
                    <span>@zzmarques</span>
                </div>

            </div>
        </section>
    )
}

export default Contact;