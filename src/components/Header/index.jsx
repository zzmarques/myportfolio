import "../../sass/components/Header.sass";
import  img from "../../../public/assets/imgs/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    return (
        <header className="header">
            <div className="container-logo">
                <img src={img} alt="logo" />
            </div>

            <nav className="navbar">
                <div className="navbar__btn-menu">
                    <RxHamburgerMenu />
                </div>

                <ul className="navbar__ul">
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Habilidades</a></li>
                    <li><a href="#">Projetos</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;