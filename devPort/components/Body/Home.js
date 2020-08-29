import React from "react";
import bodyS from "./Body.css";
import useStyles from "isomorphic-style-loader/useStyles";

const Home = (props) => {
  useStyles(bodyS);


  return (
    <div className={bodyS.media}>
      <img src={props.pic} alt="The Web Developer" />
      <h2>Skills:</h2>
      <ul className={bodyS.skills}>
        <li id="react">React</li>
        <li id="express">Express</li>
        <li id="js">Javascript</li>
        <li id="hc">HTML/CSS</li>
        <li id="mdb">MongoDB</li>
        <li id="seo">SEO Techniques</li>
      </ul>
    </div>
  );
}

export default Home;
