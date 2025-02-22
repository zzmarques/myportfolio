import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";


const btnBack = () => {
    return (
        <Link to="/">
            <button>
                <FaArrowCircleLeft />
                <span>Voltar</span>
            </button>
        </Link>
    )
}

export default btnBack;