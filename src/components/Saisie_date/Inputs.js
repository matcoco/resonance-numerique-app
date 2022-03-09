import { useContext, useRef } from "react"
import { DataContext } from "../States/context/DataContext"
import { SET_BIRTH_DATE } from "../States/reducer/ActionsType"
import Numerologie from "../../utils/Calcul.js"
import { useNavigate } from "react-router-dom"
import "./Inputs.css"
import { toast } from "react-toastify"
const zodiac = require('zodiac-signs')('fr-FR')


const Inputs = () => {
    const { dispatch } = useContext(DataContext)
    const navigate = useNavigate()
    let current_date = useRef(null)
    let current_prenom = useRef(null)
    const arrayZodiac = [
        { "aquarius": "/assets/zodiac_img/verseau.svg" },
        { "capricorn": "/assets/zodiac_img/capricorne.svg" },
        { "aries": "assets/zodiac_img/belier.svg" },
        { "taurus": "assets/zodiac_img/taureau.svg" },
        { "gemini": "assets/zodiac_img/gemeau.svg" },
        { "cancer": "assets/zodiac_img/cancer.svg" },
        { "leo": "assets/zodiac_img/lion.svg" },
        { "virgo": "assets/zodiac_img/vierge.svg" },
        { "libra": "assets/zodiac_img/balance.svg" },
        { "scorpio": "assets/zodiac_img/scorpion.svg" },
        { "sagittarius": "assets/zodiac_img/sagittaire.svg" },
        { "pisces": "assets/zodiac_img/poisson.svg" },
    ]


    const handleClickDate = () => {
        if (current_prenom.current.value !== "" && current_date.current.value !== "") {
            let jour, mois, annee, date, zodiacSign, infos, imgPathZodiac

            jour = current_date.current.value.split("-")[2]
            mois = current_date.current.value.split("-")[1]
            annee = current_date.current.value.split("-")[0]
            date = `${jour}/${mois}/${annee}`

            zodiacSign = zodiac.getSignByDate({ day: jour, month: mois })
            infos = new Numerologie(current_prenom.current.value, date)
            imgPathZodiac = checkZodiacImg(zodiacSign)

            dispatch({ type: SET_BIRTH_DATE, payload: { ...infos, zodiacImgPath: imgPathZodiac, zodiac: zodiacSign } })
            resetInputs()
            navigate("/resultats", {})
        } else {
            toast.error("Merci de remplir tous les champs!", { closeOnClick: true, autoClose: 2000, })
        }
    }

    const checkZodiacImg = (datas) => {
        const zodiac = datas?.name?.toLowerCase()
        for (let item of arrayZodiac) {
            if (item.hasOwnProperty(zodiac)) {
                return item[`${zodiac}`];
            }
        }
    }

    const resetInputs = () => {
        current_prenom.current.value = ""
        current_date.current.value = ""
    }

    return (

        <div className="container-inputs">
            <input ref={current_prenom} type="text" placeholder="prénom" required />
            <input ref={current_date} type="date" required />
            <button className="btn-inputs" type="button" onClick={handleClickDate}>C'est parti !</button>
        </div>

    )
}


export default Inputs