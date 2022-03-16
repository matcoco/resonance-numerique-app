import { useContext, useLayoutEffect, useRef } from "react"
import { capitalize } from "../../utils/Functions"
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
        {
            "aquarius": {
                "obj": {
                    "path": "assets/zodiac_img/verseau.svg",
                    "fr": "verseau"
                }
            }
        },
        {
            "capricorn": {
                "obj": {
                    "path": "assets/zodiac_img/capricorne.svg",
                    "fr": "capricorne"
                }
            }
        },
        {
            "aries": {
                "obj": {
                    "path": "assets/zodiac_img/belier.svg",
                    "fr": "bélier"
                }
            }
        },
        {
            "taurus": {
                "obj": {
                    "path": "assets/zodiac_img/taureau.svg",
                    "fr": "taureau"
                }
            }
        },
        {
            "gemini": {
                "obj": {
                    "path": "assets/zodiac_img/gemeau.svg",
                    "fr": "gémeau"
                }
            }
        },
        {
            "cancer": {
                "obj": {
                    "path": "assets/zodiac_img/cancer.svg",
                    "fr": "cancer"
                }
            }
        },
        {
            "leo": {
                "obj": {
                    "path": "assets/zodiac_img/lion.svg",
                    "fr": "lion"
                }
            }
        },
        {
            "virgo": {
                "obj": {
                    "path": "assets/zodiac_img/vierge.svg",
                    "fr": "vierge"
                }
            }
        },
        {
            "libra": {
                "obj": {
                    "path": "assets/zodiac_img/balance.svg",
                    "fr": "balance"
                }
            }
        },
        {
            "scorpio": {
                "obj": {
                    "path": "assets/zodiac_img/scorpion.svg",
                    "fr": "scorpion"
                }
            }
        },
        {
            "sagittarius": {
                "obj": {
                    "path": "assets/zodiac_img/sagittaire.svg",
                    "fr": "sagittaire"
                }
            }
        },
        {
            "pisces": {
                "obj": {
                    "path": "assets/zodiac_img/poisson.svg",
                    "fr": "poisson"
                }
            }
        },
    ]


    const handleClickDate = () => {
        if (current_prenom.current.value !== "" && current_date.current.value !== "") {
            let jour, mois, annee, date, zodiacSign, infos, zodiac_infos

            jour = current_date.current.value.split("-")[2]
            mois = current_date.current.value.split("-")[1]
            annee = current_date.current.value.split("-")[0]
            date = `${jour}/${mois}/${annee}`

            zodiacSign = zodiac.getSignByDate({ day: jour, month: mois })
            infos = new Numerologie(current_prenom.current.value, date)
            zodiac_infos = checkZodiacImg(zodiacSign)

            dispatch({ type: SET_BIRTH_DATE, payload: { ...infos, zodiacImgPath: zodiac_infos.path, zodiac: capitalize(zodiac_infos.fr) } })
            resetInputs()
            navigate("/resultats")
        } else {
            toast.error("Merci de remplir tous les champs!", { closeOnClick: true, autoClose: 2000, })
        }
    }

    const checkZodiacImg = (datas) => {
        const zodiac = datas?.name?.toLowerCase()
        let obj_zodiac = {}
        for (let item of arrayZodiac) {
            if (item.hasOwnProperty(zodiac)) {
                obj_zodiac.path = item[`${zodiac}`].obj.path
                obj_zodiac.fr = item[`${zodiac}`].obj.fr;
                return obj_zodiac
            }
        }
    }

    const resetInputs = () => {
        current_prenom.current.value = ""
        current_date.current.value = ""
    }

    useLayoutEffect(() => {
        current_date.current.value = "2022-08-21"
    })

    return (

        <div className="container-inputs">
            <label>
                <input ref={current_prenom} type="text" placeholder="prénom" required />
            </label>
            <label>
                <input ref={current_date} type="date" defaultValue={current_date.current} required />
            </label>
            
            <button className="btn-inputs" type="button" onClick={handleClickDate} >C'est parti !</button>
        </div>

    )
}


export default Inputs