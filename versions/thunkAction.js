const Directions = require('../withStyle/Directions');
const { Readable } = require('readable-stream');
import eos from 'end-of-stream';
import { matchRoutes } from "react-router-dom";
const winston = require("../config/winston");


const readableString = string => {
    const s = new Readable();
    s.push(string);
    s.push(null);
    s._read = () => true;
    return s;
};

//body
const bodyHead = readableString(`<title>Web Developer Portfolio</title>
<meta name="description" content="Web Development Homepage. Trevor is a developer located in Grant County, Wisconsin." />`);


//contact
const contactHead = readableString(`<title>Contact The Developer</title>
<meta name="description" content="Send an email to the developer." />`);

//about
const aboutHead = readableString(`<title>About The Developer</title>
<meta name="description" content="Completely custom websites at an affordable price." />`);


const thunkAction = location => {
    let headInsert;
    const myBranch = matchRoutes(Directions, location);
    console.log(`This is entire myBranch: ${myBranch}`);

    if (myBranch.length > 0) {
        const matched = myBranch[0].match.url;

        if (matched === "/") {
            headInsert = bodyHead;
        }

        if (matched === "/about") {
            headInsert = aboutHead;
        }

        if (matched === "/contact") {
            headInsert = contactHead;
        }

        return headInsert;

    } else {
        winston.info(`Unknown requested route ${location}.`)
        return null;
    }
}

module.exports = thunkAction;