import React from 'react';
import AboutDisplay from "./AboutDisplay";
import aboutS from "./About.css";

const About = () => {
  return (
    <div className={aboutS.about}>
      <AboutDisplay />
    </div>
  );
};

export default About;