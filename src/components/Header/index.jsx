import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import img from "../../../public/assets/imgs/logo.png";
import "../../sass/components/_Header.sass";



const Header = () => {

    const [toggle, setToggle] = useState(false);

    const showMenu = () => {
        setToggle(!toggle);
    };

    useEffect(() => {
        document.body.style.overflow = toggle ? "hidden" : "auto";
    }, [toggle]);

    const closeMenu = () => {
        setToggle(false)
    }

    return (
        <header className="header" data-aos="fade-down">
            <div className="container-logo">
                <img src={img} alt="logo" />
            </div>

            <nav className={`navbar ${toggle ? "active" : ""}`}>
                <div
                    className="navbar__btn-menu"
                    onClick={showMenu}

                >
                    {toggle ? <IoMdClose className="menu-icon" /> : <IoMdMenu className="menu-icon" />}

                </div>

                <div className="container-ul">
                    <ul className="navbar__ul">
                        <Link to="/" smooth={true} duration={100} onClick={closeMenu}>
                            <li>Início</li>
                        </Link>
                        <Link to="about" smooth={true} duration={100} onClick={closeMenu}>
                            <li>Sobre</li>
                        </Link>

                        <Link to="skills" smooth={true} duration={100} onClick={closeMenu}>
                            <li>Habilidades</li>
                        </Link>
                        <Link to="project" smooth={true} duration={100} onClick={closeMenu}>
                            <li>Projetos</li>
                        </Link>
                        <Link to="contact" smooth={true} duration={100} onClick={closeMenu}>
                            <li>Contato</li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;