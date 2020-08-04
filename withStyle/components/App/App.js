import React from "react";
import { useRoutes } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Directions from "../../Directions";

const App = () => {

  const pathRendered = () => {
    let thePath = useRoutes(Directions);

    return thePath;
  }

  return (
    <div className="app">
      <div className="navigation">
        <NavBar />
      </div>
      <div className="body">
        {pathRendered()}
      </div>
    </div>
  );
}

export default App;
