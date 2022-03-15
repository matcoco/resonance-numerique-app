import { useContext } from "react"
import { DataContext } from "../States/context/DataContext"
import "./SaveResults.css"
import { saveToStorage } from "../../utils/Functions"
import { toast } from "react-toastify"

const SaveResults = () => {
    const uri = process.env.REACT_APP_URI
    const { state } = useContext(DataContext)

    const handleClickSave = () => {
        let store = localStorage.getItem('data');

        if (store === null) {
            saveToStorage([state.currentUser])
            toasti("Conjoncture enregistrée !")
        } else {
            store = JSON.parse(store)
            store.push(state.currentUser)
            saveToStorage(store)
            toasti("Conjoncture enregistrée !")
        }
    }

    const toasti = (text) => {
        toast.success(text, { closeOnClick: true, autoClose: 2000, })
    }

    return (
        <div className="container-save">
            <button className="btn-save" onClick={handleClickSave}>
                <img className="icon-save-results" src={uri + "assets/save.png"} alt="disquette de sauvegarde" />
            </button>
        </div>
    )
}

export default SaveResults