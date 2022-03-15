import ImgIllustration from "../imgComp/ImgIllustration"
import Inputs from "../Saisie_date/Inputs"
import './Home.css'


const Home = () => {
    return (
        <>
            <ImgIllustration />
            <div className="container-part-home">
                <div className="container-titles">
                    <p className="p-home">Obtenez votre conjoncture depuis cette application gratuitement</p>
                    <Inputs />
                </div>
            </div>
        </>

    )
}

export default Home