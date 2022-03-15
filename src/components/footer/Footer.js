import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () => {
    const uri = process.env.REACT_APP_URI
    return (
        <footer className="container-footer bg-dark text-center">
            <span className="text-white">© 2022 - </span>
            <span className="text-white">site développé par <a target="_blank" rel="noreferrer" className="link-github" href="https://github.com/matcoco">Matcoco</a>🧡</span>
            <span><Link className="text-white" to={uri+'mentions-legales'}> - mentions légales - </Link></span>
        </footer>
    )
}


export default Footer