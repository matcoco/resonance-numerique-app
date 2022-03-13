import ImgIllustration from "../imgComp/ImgIllustration"
import Inputs from "../Saisie_date/Inputs"
import './Home.css'


const Home = () => {

    return (
        <>
            <div className="container-home">
                <ImgIllustration classN="container-illustration">
                    <img className="illustration-home" src="/assets/illustration_.svg" alt="background header" />
                </ImgIllustration>

            </div>


            <div className="container-titles">
                <p className="p-home">Obtenez votre conjoncture depuis cette application gratuitement</p>
                <Inputs />
            </div>
        </>
    )
}

export default Home