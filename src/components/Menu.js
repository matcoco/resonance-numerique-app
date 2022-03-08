
import { Link, NavLink } from "react-router-dom"
import "./Menu.css"
const Menu = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand">RNA</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/"><span className="nav-link active" aria-current="page">Home</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/archives"><span className="nav-link active" aria-current="page">Archives</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/"><span className="nav-link active" aria-current="page">Méthode de calcul</span></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}



export default Menu