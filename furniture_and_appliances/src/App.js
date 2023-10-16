import React from "react";
import MainPage from "./Pages/MainPage/MainPage";
import Rout from "./rout";
import { BrowserRouter as Routes} from "react-router-dom";
const App = () => 
{
  return(
    <>
    <Routes>
    <Rout/>
    </Routes>
    </>
  )
}

export default App

