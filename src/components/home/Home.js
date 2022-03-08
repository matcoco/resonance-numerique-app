import ImgIllustration from "../imgComp/ImgIllustration"
import Inputs from "../Saisie_date/Inputs"
import './Home.css'
import Menu from "../Menu"

const Home = () => {

    return (
        <>
            <Menu />
            <ImgIllustration classN="container-img-home">
                <ImgIllustration classN="container-illustration">
                    {/*  <img className="illustration-home" src="/assets/illustration_.svg" alt="background header" /> */}
                </ImgIllustration>

                <div className="container-titles">
                    <h1 className="h1-home">RESONNANCE NUMERIQUE APP</h1>
                    <p className="p-home">Obtenez votre conjoncture depuis cette application</p>
                    <Inputs />
                </div>
            </ImgIllustration>
        </>

    )
}

export default Home