
import { useReducer } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import DetailsResultsPart from "./DetailsResultParts";
import DisplayResults from "./ecrans_résultats/DisplayResults";
import Home from "./home/Home";
import Inputs from "./Saisie_date/Inputs";
import { DataContext } from "./States/context/DataContext";
import { Reducer } from "./States/reducer/Reducer";
import { datas } from "./States/reducer/Reducer";
import '../App.css'
import Archivage from "./archives/Archivage";
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MethodeDeCalcul from "./methode_de_calcul/MethodeDeCalcul";

const Routeur = () => {
  const [state, dispatch] = useReducer(Reducer, datas)
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/archives" element={<Archivage />}></Route>
          <Route path="/birth-date" element={<Inputs />}></Route>
          <Route path="/resultats" element={<DisplayResults />}></Route>
          <Route path="/resultats/:type" element={<DetailsResultsPart />}></Route>
          <Route path="/methode-de-calcul" element={<MethodeDeCalcul />}></Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </DataContext.Provider>
  )
}

export default Routeur