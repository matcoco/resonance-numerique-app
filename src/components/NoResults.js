
import { useNavigate } from "react-router-dom"
import { useEffect, useContext } from "react";
import { DataContext } from "./States/context/DataContext";

export const useDataStatus = (prenom) => {
        const { state } = useContext(DataContext)
        const navigate = useNavigate();
        const uri = process.env.REACT_APP_URI
        useEffect(() => {
            if (prenom === undefined || state.currentUser.prenom === undefined){
                navigate(uri)
            }
        },[navigate, prenom,state.currentUser.prenom])
    
}
