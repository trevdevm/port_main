import React, { useState, useEffect } from "react";
import { Switch, Route, withRouter, useLocation } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import Load from "../Load";
import { renderRoutes, matchRoutes } from "react-router-config";
import { Resource } from "../../../Resource";
import { routes } from "../../../routes";

const App = () => {
  let location = useLocation();

  const [currentLocation, setCurrentLocation] = useState(location);
  const [head, setHead] = useState(false);
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {
    setIsServer(false);
    rendering();
  }, [])

  useEffect(() => {
    setCurrentLocation(location);
  }, [location])

  /*useEffect(async () => {
    if (!isServer) {
      function getRenderData() {
        const fullStr = Resource(location.pathname);
        if (fullStr == null) {
          return;
        }

        const parts = fullStr.split("</title>");
        const titleStr = parts[0];
        const describeStr = parts[1].substr(parts[1].lastIndexOf("=") + 1, parts[1].lastIndexOf("\""));
        return [titleStr, describeStr];
      }
      const [title, describe] = getRenderData();


      console.log(`Title: ${titleStr} Describe: ${describeStr}`);

      function setData() {
        document.title = title;
        document.head.getElementById("myDescribe").content = describe;
      }
      setData().then(setCurrentLocation(location)).catch(err => {
        console.error(err);
        if (currentLocation.pathname === location.pathname) {
          return;
        }
        else {
          setCurrentLocation(location);
        }
      })
    } else {
      return;
    }
  }, [location]) */

  const rendering = () => {
    function getRenderData() {
      const fullStr = Resource(location.pathname);
      if (fullStr === null) {
        return;
      }

      const parts = fullStr.split("</title>");
      const titleStr = parts[0];
      const describeStr = parts[1].substr(parts[1].lastIndexOf("=") + 1, parts[1].lastIndexOf("\""));
      const resultsArr = [titleStr, describeStr];
      return resultsArr;
    }
    
    if (isServer === false) {

      const htmlArr = getRenderData();


      console.log(`Title: ${htmlArr[0]} Describe: ${htmlArr[1]}`);

      function setData() {
        document.title = htmlArr[0];
        document.head.getElementById("myDescribe").content = htmlArr[1];
      }
      setData();
    } 

    setHead(true);
    return;
  }

  return (
    <div className="app">
      <div className="navigation">
        <NavBar />
      </div>
      <div className="body">
        {head ? renderRoutes(routes) : <Load />}
      </div>
    </div>
  );
}

export default App;