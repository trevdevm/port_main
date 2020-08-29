import React, { useState, useEffect } from "react";
import { useLocation, Switch } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import Load from "../Load";
import { renderRoutes } from "react-router-config";
import { Resource } from "../../../Resource";
import { routes } from "../../../routes";

const App = () => {
  let location = useLocation();

  const [currentLocation, setCurrentLocation] = useState(location);
  const [head, setHead] = useState(false);
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {
    setIsServer(false);
    setHead(true);
  }, [])

  useEffect(() => {
    rendering();
    setCurrentLocation(location);
  }, [location])

  const rouRen = () => {
    const myRoutes = routes;
    return (
      <Switch>
        {renderRoutes(myRoutes)}
      </Switch>
    )
  }

  const rendering = () => {
    const myRen = rouRen();

    if (!isServer) {
      function getRenderData() {
        const headArr = Resource(location.pathname);
        if (headArr === null) {
          return;
        }

        return headArr;
      }

      const htmlArr = getRenderData();

      function setData() {
        document.title = htmlArr[0];
        document.getElementById("myDescribe").content = htmlArr[1];
      }

      setData();
      if (!head) {
        setHead(true);
      }

      return (head ? myRen : <Load />);
    }

    return myRen;
  }

  return (
    <div className="app">
      <div className="navigation">
        <NavBar />
      </div>
      <div className="body">
        {rendering()}
      </div>
    </div>
  );
}

export default App;