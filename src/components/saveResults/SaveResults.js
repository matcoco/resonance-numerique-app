import { useContext } from "react"
import { DataContext } from "../States/context/DataContext"
import "./SaveResults.css"
import { saveToStorage } from "../../utils/Functions"

const SaveResults = () => {
    const { state } = useContext(DataContext)

    const handleClickSave = () => {
        let store = localStorage.getItem('data');

        if (store === null) {
            saveToStorage([state.currentUser])
        }else{
            store = JSON.parse(store)
            store.push(state.currentUser)
            saveToStorage(store)
        }
    }


    return (
        <div className="container-save">
            <button className="btn-save" onClick={handleClickSave}>
                <img className="icon-save-results" src="/assets/save.png" alt="disquette de sauvegarde" />
            </button>
        </div>
    )
}

export default SaveResults