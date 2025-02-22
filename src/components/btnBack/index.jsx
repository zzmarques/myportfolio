import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import '../../sass/components/_BtnBack.sass';


const BtnBack = () => {
    return (
        <Link to="/" className="link">
            <button className="btn-back">
                <FaArrowLeft />
                <span>Voltar</span>
            </button>
        </Link>
    )
}

export default BtnBack;