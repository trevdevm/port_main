import React from 'react';
import AboutDisplay from "./AboutDisplay";
import aboutS from "./About.css";
import useStyles from "isomorphic-style-loader/useStyles";

const About = () => {
  useStyles(aboutS);

  return (
    <div className={aboutS.about}>
      <AboutDisplay />
    </div>
  );
};

export default About;