
import { NavLink } from "react-router-dom"
import "./Menu.css"
const Menu = () => {
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand title">
                        <NavLink to={"/"}>
                            <span className="title-nav" aria-current="page">Résonance Numérique</span>
                        </NavLink>
                    </span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to={'/'}><span className="nav-link" aria-current="page" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Accueil</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/archives"}><span className="nav-link" aria-current="page" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Archives</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/methode-de-calcul"}><span className="nav-link" aria-current="page" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Méthode de calcul</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/a-propos-du-site"}><span className="nav-link" aria-current="page" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">A propos du site</span></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}



export default Menu