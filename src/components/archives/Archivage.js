import Menu from "../Menu"
import ImgIllustration from "../imgComp/ImgIllustration"
import { useContext, useEffect, useState } from "react";
import { capitalize, saveToStorage } from "../../utils/Functions";
import { sun_img, earth_img, lune_img, path_life_img } from "../const_img/const_img";
import "./Archivage.css"
import { DataContext } from "../States/context/DataContext";
import { SET_BIRTH_DATE } from "../States/reducer/ActionsType";
import { useNavigate } from "react-router-dom";

const Archivage = () => {
    const [data, setData] = useState([])
    const { dispatch } = useContext(DataContext)
    const navigate = useNavigate()

    const getItemFromStorage = () => {
        let store = localStorage.getItem('data');
        if (store === null) return []
        else return JSON.parse(store)
    }

    useEffect(() => {
        let cleanup = true
        if (cleanup) setData(getItemFromStorage())
        return () => {
            cleanup = false
        }
    }, [])

    const iconAndNumber = (number, path, text) => {
        return (
            <div className="container-iconNumber-archivage">
                <div>
                    <img src={path} alt={text} />
                </div>
                <div>
                    <p>{number}</p>
                </div>

            </div>
        )
    }

    const removeItemToStorage = (e) => {
        let id = +e.target.id
        const newData = data.filter((item, index) => index !== id)
        setData(() => {
            saveToStorage(newData)
            return newData
        })
    }

    const handleClickNavigateToItem = (id) => {
        let currentItem = data[id]
        dispatch({ type: SET_BIRTH_DATE, payload: currentItem })
        navigate("/resultats", { state : { back: `archives`} })
    }


    return (
        <>
            <Menu />
            <ImgIllustration classN={"container-img-save"}>
                {
                    data.length > 0 ?
                        <div className="container-save-infos" >
                            {
                                data.map((item, index) => {
                                    return (
                                        <div key={index} className="container-archivage">
                                            <div className="container-archivage-line" onClick={() => { handleClickNavigateToItem(index) }}>
                                                <span>{capitalize(item.prenom)}</span>
                                                {iconAndNumber(item.lune, lune_img, "lune")}
                                                {iconAndNumber(item.soleil, sun_img, "soleil")}
                                                {iconAndNumber(item.terre, earth_img, "terre")}
                                            </div>

                                            <div>
                                                <button
                                                    type="button"
                                                    className="btn btn-danger"
                                                    id={index}
                                                    onClick={(e) => { removeItemToStorage(e) }}
                                                >X</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        :
                        <div className="no-data-save">pas de données</div>
                }

            </ImgIllustration>
        </>
    )
}


export default Archivage