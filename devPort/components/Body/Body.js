import React from "react";
import Home from "./Home";
import Heading from "./Heading";
import CalThumb from "./CalThumb";
import bodyS from "./Body.css";
import withStyles from "isomorphic-style-loader/withStyles";

const Body = () => {
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
//export default withStyles(bodyS)(Body);
