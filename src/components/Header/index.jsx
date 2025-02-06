import "../../sass/components/Header.sass";
import  img from "../../../public/assets/imgs/logo.png";
import { IoMdMenu, IoMdClose } from "react-icons/io";

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
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Habilidades</a></li>
                        <li><a href="#">Projetos</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;