import React from "react";
import Home from "./Home";
import Heading from "./Heading";
import CalThumb from "./CalThumb";
import bodyS from "./Body.css";
import useStyles from "isomorphic-style-loader/useStyles";

const Body = () => {
  useStyles(bodyS);

  return (
    <div>
      <div className={bodyS.head}>
        <Heading />
      </div>
      <div className={bodyS.hGrid}>
        <div className={bodyS.home}>
          <Home />
        </div>
        <div className={bodyS.calThumb}>
          <CalThumb />
        </div>
      </div>
    </div>
  );
};

export default Body;