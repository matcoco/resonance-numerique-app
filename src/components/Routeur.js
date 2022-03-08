
import { useReducer } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import DetailsResultsPart from "./DetailsResultParts";
import DisplayResults from "./ecrans_résultats/DisplayResults";
import Home from "./home/Home";
import Menu from "./Menu";
import Inputs from "./Saisie_date/Inputs";
import { DataContext } from "./States/context/DataContext";
import { Reducer } from "./States/reducer/Reducer";
import { datas } from "./States/reducer/Reducer";
import '../App.css'
import Archivage from "./archives/Archivage";

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
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  )
}

export default Routeur