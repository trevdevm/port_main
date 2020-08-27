import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AboutDisplay = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <div className="aboutDisplay" style={{ visibility: ready ? 'visible' : 'hidden' }}>
      <h1>About Me</h1>
      <div className="abPar">
        <p>
          I'm a web developer living in Wisconsin, USA!
          A fully customized website stands out, providing many benefits like the freedom to do what you want and show your customers who you are.
        </p>
        <br />
        <p>
          Check out my calendar project... <b style={{ color: "seagreen" }}>more are on the way... </b> and get in touch with me via email if
          you'd like me to assist you in bringing your ideas to life!
          </p>
      </div>
      <div className="emailLink">
        <Link
          to="/contact"
          style={{
            textDecoration: "none",
            color: "seagreen",
            fontSize: 40
          }}
        >
          Email Me!
        </Link>
      </div>
    </div>
  );
}

export default AboutDisplay;
