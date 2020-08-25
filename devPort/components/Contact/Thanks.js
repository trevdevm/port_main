import React from 'react';
import { Link } from "react-router-dom";
import useStyles from "isomorphic-style-loader/useStyles";
import formS from "./Form.css";

const Thanks = (props) => {
    useStyles(formS);

    return (
        <div className={formS.thanks}>
            <h1>Thank you, {props.legit}!</h1>
            <h2 >I will look over your email and get back to you shortly. I will do my best to help or point you in the right direction. Thanks and have a nice day!</h2>
            <div className={formS.goHome}>
                <Link to="/" id="goH">Homepage</Link>
            </div>
        </div>
    )
};

export default Thanks;