import React from "react";
import bodyS from "./Body.css";
import useStyles from "isomorphic-style-loader/useStyles";

const CalThumb = (props) => {
    useStyles(bodyS);

    return (
        <div className={bodyS.theCal}>
            <h2>Calendar/Scheduling App</h2>
            <a id="blahC" href="https://www.devmunns.site/cal/">Click here to check it out!</a>
            <img src={props.pic} alt="Calendar and Scheduling Application" />
        </div>
    )
}

export default CalThumb;