
import { useReducer } from "react";
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import DetailsResultsPart from "./DetailsResultParts";
import DisplayResults from "./ecrans_resultats/DisplayResults";
import Home from "./home/Home";
import Inputs from "./Saisie_date/Inputs";
import { DataContext } from "./States/context/DataContext";
import { Reducer } from "./States/reducer/Reducer";
import { datas } from "./States/reducer/Reducer";
import './Routeur.css'
import Archivage from "./archives/Archivage";
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MethodeDeCalcul from "./methode_de_calcul/MethodeDeCalcul";
import About from "./about/About";
import Menu from "./Menu";
import Footer from "./footer/Footer";
import MentionLegal from "./mentions_legale/MentionLegale";

const Routeur = () => {

  const [state, dispatch] = useReducer(Reducer, datas)

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      <HashRouter>
        <Menu />
        <div className="page-container">
          <div className="content-wrap">
            <Routes>
              <Route path={'/'} exact element={<Home />}></Route>
              <Route path={"/archives"} element={<Archivage />}></Route>
              <Route path={"/birth-date"} element={<Inputs />}></Route>
              <Route path={"/resultats"} element={<DisplayResults />}></Route>
              <Route path={"/resultats/:type"} element={<DetailsResultsPart />}></Route>
              <Route path={"/methode-de-calcul"} element={<MethodeDeCalcul />}></Route>
              <Route path={"/a-propos-du-site"} element={<About />}></Route>
              <Route path={"/mentions-legales"} element={<MentionLegal />}></Route>
            </Routes>
          </div>
          <Footer />
        </div>
        <ToastContainer />
      </HashRouter>
    </DataContext.Provider >
  )
}

export default Routeur