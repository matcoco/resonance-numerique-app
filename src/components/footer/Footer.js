import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="container-footer bg-dark text-center">
            <span className="text-white">© 2022 - </span>
            <span className="text-white">site développé par Matcoco 💙</span>
            <span><Link className="text-white" to="/mentions-legales"> - mentions légales - </Link></span>
        </footer>
    )
}


export default Footer