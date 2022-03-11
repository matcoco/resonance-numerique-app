import ImgIllustration from "../imgComp/ImgIllustration"
import Inputs from "../Saisie_date/Inputs"
import './Home.css'
import Menu from "../Menu"
import Footer from "../footer/Footer"

const Home = () => {

    return (

        <div className="container-home">
            <Menu />
            <ImgIllustration classN="container-img-home">
                <div className="content-home">
                    <ImgIllustration classN="container-illustration">
                        <img className="illustration-home" src="/assets/illustration_.svg" alt="background header" />
                    </ImgIllustration>

                    <div className="container-titles">
                        <p className="p-home">Obtenez votre conjoncture depuis cette application gratuitement</p>
                        <Inputs />
                        <Footer />
                    </div>
                </div>

            </ImgIllustration>
        </div>
    )
}

export default Home