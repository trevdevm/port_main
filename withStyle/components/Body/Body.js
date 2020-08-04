import React from "react";
import Home from "./Home";
import Heading from "./Heading";
import CalThumb from "./CalThumb";
//import "./Body.css";

const Body = () => {
  return (
    <div>
      <div className="head">
        <Heading />
      </div>
      <div className="hGrid">
        <div className="home">
          <Home />
        </div>
        <div className="calThumb">
          <CalThumb />
        </div>
      </div>
    </div>
  );
};

export default Body;
