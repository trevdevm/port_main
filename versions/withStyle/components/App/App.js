import React, { useState, useEffect } from "react";
import { matchRoutes, useLocation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Directions from "../../Directions";

const App = () => {

  let location = useLocation();
  const [view, setView] = useState(location);

  const direction = () => {
    let matched = matchRoutes(Directions, location);
    setView(matched);
  }

  useEffect(() => {
    direction();
  }, [location])

  return (
    <div className="app">
      <div className="navigation">
        <NavBar />
      </div>
      <div className="body">
        {view}
      </div>
    </div>
  );
}

export default App;
