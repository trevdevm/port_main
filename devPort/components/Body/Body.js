import React, { useState, useEffect } from "react";
import Home from "./Home";
import Heading from "./Heading";
import CalThumb from "./CalThumb";
import bodyS from "./Body.css";
import useStyles from "isomorphic-style-loader/useStyles";
const homeImg = require("../../../public/slate_t.jpg");
const calImg = require("../../../public/cal1500C.png");

const Body = (props) => {
  useStyles(bodyS);
  const [pics, setPics] = useState([]);

  useEffect(() => {
    setPics([homeImg, calImg]);
  }, []);

  return (
    <div>
      <div className={bodyS.head}>
        <Heading />
      </div>
      <div className={bodyS.hGrid}>
        <div className={bodyS.home}>
          <Home pic={pics[0] || homeImg} />
        </div>
        <div className={bodyS.calThumb}>
          <CalThumb pic={pics[1] || calImg} />
        </div>
      </div>
    </div>
  );
};

export default Body;
