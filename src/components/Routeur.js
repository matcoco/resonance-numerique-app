
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
import '../Routeur.css'
import Archivage from "./archives/Archivage";
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MethodeDeCalcul from "./methode_de_calcul/MethodeDeCalcul";
import About from "./about/About";
import Menu from "./Menu";
import Footer from "./footer/Footer";

const Routeur = () => {
  const [state, dispatch] = useReducer(Reducer, datas)
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Menu />
        <div className="page-container">
          <div className="content-wrap">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/archives" element={<Archivage />}></Route>
              <Route path="/birth-date" element={<Inputs />}></Route>
              <Route path="/resultats" element={<DisplayResults />}></Route>
              <Route path="/resultats/:type" element={<DetailsResultsPart />}></Route>
              <Route path="/methode-de-calcul" element={<MethodeDeCalcul />}></Route>
              <Route path="/a-propos-du-site" element={<About />}></Route>
            </Routes>
          </div>
          <Footer />
        </div>
        <ToastContainer />
      </BrowserRouter>
    </DataContext.Provider >
  )
}

export default Routeur