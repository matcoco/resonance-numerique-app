import { useContext, useEffect, useState } from "react"
import ArrowBack from "../ArrowBack"
import { DataContext } from "../States/context/DataContext"
import ResultPart from "./ResultPart"
import './DisplayResults.css'
import ImgIllustration from "../imgComp/ImgIllustration"
import Welcome from "../Welcome"
import { capitalize } from "../../utils/Functions.js"
import { useDataStatus } from "../NoResults.js"
import SaveResults from "../saveResults/SaveResults"
import { lune_img, sun_img, earth_img, path_life_img } from "../const_img/const_img"
import { useLocation } from "react-router-dom"

const DisplayResults = () => {

    const { state: { currentUser: { prenom, date, soleil, lune, cheminDeVie, terre, zodiacImgPath, zodiac } } } = useContext(DataContext)
    useDataStatus(prenom)
    const [back, setBack] = useState("")
    const { state } = useLocation()

    useEffect(() => {
        let cleanup = true
        if (cleanup) {
            if (state !== null) {
                setBack(state.back)
            }
        }

        return () => {
            cleanup = false
        }
    }, [state])

    return (
        <>
            <ImgIllustration />
            <div className="container-part1 pt-5">
                <Welcome
                    prenom={capitalize(prenom)}
                    date={date}
                    zodiac={zodiac}
                />
            </div>

            <div className="container-img-results">
                <img className="illustration-results" src={zodiacImgPath} alt="illustration aquarius zodiac" />
            </div>
            
            <div className="container-part2">
                <div className="container-result-infos">
                    <div className="container">
                        <ArrowBack link={back} />
                    </div>


                    <div className="container-cheminDeVie">
                        <ResultPart img={path_life_img} number={cheminDeVie} text="Chemin de vie..." alt="illustration d'une route à 2 chemins" classN="container-resultPart" />
                    </div>
                    <div className="container-results">
                        <ResultPart img={lune_img} number={lune} text="Je pense..." alt="illustration de la Lune" type="lune" classN="container-resultPart" back={back} />
                        <ResultPart img={sun_img} number={soleil} text="Je suis..." alt="illustration du Soleil" type="soleil" classN="container-resultPart" back={back} />
                        <ResultPart img={earth_img} number={terre} text="Je fais..." alt="illustration de la Terre" type="terre" classN="container-resultPart" back={back} />
                    </div>
                    {state?.back !== "archives" ? <SaveResults /> : null}
                </div>
            </div>
        </>
    )
}


export default DisplayResults