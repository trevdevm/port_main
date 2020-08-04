import React from "react";
import { renderToNodeStream } from "react-dom/server";
import { ChunkExtractor } from "@loadable/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./ssr/components/App/App";
const winston = require("./config/winston");
const { Readable } = require('readable-stream');
const path = require("path");
import eos from 'end-of-stream';
const thunkAction = require("./thunkAction");

const readableString = string => {
    const s = new Readable();
    s.push(string);
    s.push(null);
    s._read = () => true;
    return s;
};

const statsFile = path.resolve("./dist/loadable-stats.json");
const chunkExtractor = new ChunkExtractor({
    statsFile
});

const middleware = async (req, res) => {


    const headContext = thunkAction(req.path);

    const reactMarkup = chunkExtractor.collectChunks(
        <StaticRouter url={req.url}>
            <App />
        </StaticRouter>
    );





    const headerStream = `<!doctype html><html lang="en"><head><link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin><style>
    .aboutDisplay{display:grid;grid-template:1.2fr 3fr 1.5fr/1fr;width:100%;height:95%;align-self:center;justify-self:center;grid-area:1/2/3/3}.aboutDisplay h1{grid-area:1/1/2/2;font-size:5.5rem;text-shadow:.5px 1.2px #fffbee;font-family:Poppins,sans-serif;font-weight:700;color:#8872ad;justify-self:center;align-self:center;text-align:center}.abPar{grid-area:2/1/3/4;font-size:2rem;font-family:Poppins,sans-serif;line-height:1.4;color:#fffbee}.emailLink{grid-area:3/1/4/2;justify-self:center;align-self:center;text-align:center}#contact-form{grid-area:3/1/4/2}.nameRow{grid-area:1/1/2/3;display:grid;grid-template-columns:1fr 3fr}.emailRow{grid-area:2/1/3/3;display:grid;grid-template-columns:1fr 3fr}.messageRow{grid-area:3/1/4/3;display:grid;grid-template-columns:1fr 3fr}.gridfButton{grid-area:4/2/5/3;align-self:center;justify-self:center}.fHead{grid-area:1/1/2/2;display:flex;width:80%;font-family:Poppins,sans-serif;font-size:1.5rem;color:#fffbee;line-height:1.5;margin:2%}.fError{grid-area:2/1/3/2;display:flex;flex-direction:column;width:90%;font-family:Poppins,sans-serif;font-size:1.5rem;margin-top:2%;margin-left:3%;margin-right:1%}.goHome{grid-area:3/2/4/3;justify-self:center;align-self:center}.home{grid-area:1/1/2/2}.calThumb{grid-area:2/1/3/2}.theCal>h2{grid-area:1/1/2/2;justify-self:center;align-self:center;font-size:2rem;color:#32558c;text-shadow:1.5px 1.8px #000;font-weight:700}.theCal h3{grid-area:2/1/3/2;justify-self:center;font-size:1.7rem;font-style:italic;color:#2e8b57}.theCal>img{grid-area:3/1/4/2;width:auto;height:auto;max-width:100%;max-height:100%;justify-self:center;align-self:start;margin-top:8%}.media img{width:auto;height:auto;max-width:100%;max-height:100%;border:5px solid #fffbee;grid-area:1/1/3/2;align-self:center;justify-self:center}.media h2{font-size:2.8rem;font-family:Poppins,sans-serif;font-weight:700;grid-area:1/2/2/3;color:#8872ad;align-self:center;justify-self:center;margin-right:2%}.media .skills{display:flex;list-style-type:none;flex-direction:column;justify-content:space-evenly;align-content:space-evenly;font-size:1.5rem;font-family:Poppins,sans-serif;grid-area:2/2/3/3;color:#8872ad;margin-right:2%}
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="preload" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet"></noscript><style>a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;box-sizing:border-box}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}#root,body,html{height:100%;font-size:10px;scroll-behavior:smooth}body{margin:0;font-family:Poppins,-apple-system,BlinkMacSystemFont,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.app{display:grid;grid-template:10vh auto/100%;height:100%}.navigation{grid-area:1/1/2/2}.body{grid-area:2/1/3/2}.navBar{display:flex;flex-direction:row;justify-items:flex-start;width:100%;height:100%;background-color:#000}.navItems{display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;width:100%;height:100%}#about,#contact,#home{text-decoration:none;font-size:2.5rem;font-family:Poppins,sans-serif;font-weight:700}body{background-color:#010a1a;background-image:url(../public/warp_c_mobile.png);background-size:cover;background-repeat:no-repeat;background-attachment:fixed;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover}@media only screen and (min-device-width :768px){body{background-image:url(../public/warp_background_desktop.png)}#root,body,html{font-size:16px}.app{grid-template:2.4rem auto/100%}.navItems{width:60%}#about,#contact,#home{font-size:1.7rem}}</style><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Web Developer Portfolio</title><link rel="icon" href="../public/favicon.png" type="image/png"><link href="/dist/main.css" rel="preload" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link href="/dist/main.css" rel="stylesheet"></noscript>
    <script>!function(n){"use strict";n.loadCSS||(n.loadCSS=function(){});var t,o=loadCSS.relpreload={};o.support=function(){var e;try{e=n.document.createElement("link").relList.supports("preload")}catch(t){e=!1}return function(){return e}}(),o.bindMediaToggle=function(t){var e=t.media||"all";function a(){t.addEventListener?t.removeEventListener("load",a):t.attachEvent&&t.detachEvent("onload",a),t.setAttribute("onload",null),t.media=e}t.addEventListener?t.addEventListener("load",a):t.attachEvent&&t.attachEvent("onload",a),setTimeout(function(){t.rel="stylesheet",t.media="only x"}),setTimeout(a,3e3)},o.poly=function(){if(!o.support())for(var t=n.document.getElementsByTagName("link"),e=0;e<t.length;e++){var a=t[e];"preload"!==a.rel||"style"!==a.getAttribute("as")||a.getAttribute("data-loadcss")||(a.setAttribute("data-loadcss",!0),o.bindMediaToggle(a))}},o.support()||(o.poly(),t=n.setInterval(o.poly,500),n.addEventListener?n.addEventListener("load",function(){o.poly(),n.clearInterval(t)}):n.attachEvent&&n.attachEvent("onload",function(){o.poly(),n.clearInterval(t)})),"undefined"!=typeof exports?exports.loadCSS=loadCSS:n.loadCSS=loadCSS}("undefined"!=typeof global?global:this);</script>`;

    await res.write(headerStream);

    const headClose = readableString(`</head><body id="golden"><div id="main">`);

    if (headContext != null) {
        await headContext.pipe(res, { end: false });
        eos(headContext, (err) => {
            if (err) {
                winston.error(`headContext error. ${err.toString()}`);
            }

            headClose.pipe(res, { end: false });
        })

    }

    else {
        headClose.pipe(res, { end: false });
    }

    headClose.pipe(res, { end: false });



    const htmlStream = renderToNodeStream(reactMarkup);

    await htmlStream.pipe(res, { end: false });

    eos(htmlStream, (err) => {
        if (err) {
            winston.error(`htmlStream Error piping importedTracker: ${err.toString()}`);
            process.exit(1);
        }

        res.end(`</div>${chunkExtractor.getScriptTags()}</body></html>`)
    })
}

export default middleware;