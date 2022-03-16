
import { useNavigate } from "react-router-dom"
import { useEffect, useContext } from "react";
import { DataContext } from "./States/context/DataContext";

export const useDataStatus = (prenom) => {
        const { state } = useContext(DataContext)
        const navigate = useNavigate();

        useEffect(() => {
            if (prenom === undefined || state.currentUser.prenom === undefined){
                navigate("/")
            }
        },[navigate, prenom,state.currentUser.prenom])
    
}
