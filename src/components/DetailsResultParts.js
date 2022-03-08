import { useLocation } from "react-router-dom"
import ResultPart from "./ecrans_résultats/ResultPart"
import ArrowBack from "./ArrowBack"
import { useEffect, useState } from "react"
import ImgIllustration from "./imgComp/ImgIllustration"
import './DetailResults.css'
import { useDataStatus } from "./NoResults"
import Menu from "./Menu"

const DetailsResultsPart = () => {
    const [definition, setDefinition] = useState("")
    const [distorsion, setDistorsion] = useState("")
    const { state } = useLocation()

    useDataStatus("")

    useEffect(() => {
        console.log("detailsResultsParts : ", state)
        let cleanup = true
        fetch('/datas.json').then(res => res.json()).then(data => {
            for (let item of data) {
                if (item.hasOwnProperty(state.type)) {
                    let def = item[`${state.type}`]
                    let id = state.number
                    if (cleanup) {
                        setDefinition(def[id - 1].definition)
                        setDistorsion(def[id - 1].distorsion)
                    }
                }
            }
        })
        return function () { cleanup = false }
    }, [state.number, state.type])

    return (
        <>
            <Menu />
            <ImgIllustration classN={"container-img-displayResults"}>
                <ArrowBack link="resultats" back={state.back}/>

                <div className="container-detail-result-infos">
                    <div className="container-div-detailPart">
                        <div>
                            <ResultPart
                                img={state.img}
                                number={state.number}
                                text={state.text}
                                alt={state.alt}
                                type={state.type}
                                classN='container-detailPart'
                            />
                        </div>
                    </div>
                    <div className="container-definition">
                        <h3>Ce qu'on peut en dire</h3>
                        <p>{definition}</p>
                    </div>

                    <div className="container-definition">
                        <h3>Distorsion</h3>
                        <p>{distorsion}</p>
                    </div>
                </div>
            </ImgIllustration>
        </>

    )
}


export default DetailsResultsPart