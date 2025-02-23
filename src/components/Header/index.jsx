import "../../sass/components/_Header.sass";
import  img from "../../../public/assets/imgs/logo.png";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";

const Header = () => {
    return (
        <header className="header">
            <div className="container-logo">
                <img src={img} alt="logo" />
            </div>

            <nav className="navbar">
                <div className="navbar__btn-menu">
                    <IoMdMenu className="menu-icon"/>
                </div>

                <div className="container-ul">
                    <ul className="navbar__ul">
                        <Link to="/" smooth={true} duration={500}>
                            <li>Início</li>
                        </Link>

                        <Link to="about" smooth={true} duration={500}>
                            <li>Sobre</li>
                        </Link>

                        <Link to="skills" smooth={true} duration={500}>
                            <li>Habilidades</li>
                        </Link>
                        <Link to="project" smooth={true} duration={500}>
                            <li>Projetos</li>
                        </Link>
                        <Link to="contact" smooth={true} duration={500}>
                            <li>Contato</li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;