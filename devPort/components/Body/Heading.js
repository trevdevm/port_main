import React from "react";
import bodyS from "./Body.css";
import useStyles from "isomorphic-style-loader/useStyles";

const Heading = () => {
  useStyles(bodyS);

  return (
    <div className={bodyS.chosen}>
      <div className={bodyS.left}>
        <h2 className={bodyS.large}>Welcome!</h2>
        <h2 className={bodyS.large2}>My Name Is Trevor,</h2>
      </div>
      <div className={bodyS.right}>
        <h1 className={bodyS.largest}>THE WEB DEVELOPER</h1>
      </div>
    </div>
  );
}

export default Heading;