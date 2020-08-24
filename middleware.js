import React from "react";
import { renderToNodeStream } from "react-dom/server";
import { ChunkExtractor } from "@loadable/server";
import { StaticRouter } from "react-router-dom";
import StyleContext from "isomorphic-style-loader/StyleContext";
//import { matchPath } from "react-router-dom";
const App = require("./server/App.js").default;
const winston = require("./config/winston");
const { Readable } = require('readable-stream');
const path = require("path");
import eos from 'end-of-stream';
//const routes = require("./routes.js").routes;
const Resource = require("./Resource").Resource;

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

    console.log(req.path);
    const titleDescriptionString = Resource(req.path);
    console.log(titleDescriptionString);

    const css = new Set();

    const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()));

    let staticContext = {};

    const reactMarkup = chunkExtractor.collectChunks(
        <StyleContext.Provider value={{ insertCss }}>
            <StaticRouter url={req.url} context={staticContext}>
                <App />
            </StaticRouter>
        </StyleContext.Provider>
    );





    const headerStream = `<!doctype html><html lang="en"><head><link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin><link rel="icon" href="../public/favicon.png" type="image/png"/><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet"><style>a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;box-sizing:border-box}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}#root,body,html{height:100%;font-size:10px;scroll-behavior:smooth}body{margin:0;font-family:Poppins,-apple-system,BlinkMacSystemFont,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.app{display:grid;grid-template:10vh auto/100%;height:100%}.navigation{grid-area:1/1/2/2}.body{grid-area:2/1/3/2}.navBar{display:flex;flex-direction:row;justify-items:flex-start;width:100%;height:100%;background-color:#000}.navItems{display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;width:100%;height:100%}#about,#contact,#home{text-decoration:none;font-size:2.5rem;font-family:Poppins,sans-serif;font-weight:700}body{background-color:#010a1a;background-image:url(../public/warp_c_mobile.png);background-size:cover;background-repeat:no-repeat;background-attachment:fixed;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover}@media only screen and (min-device-width :768px){body{background-image:url(../public/warp_background_desktop.png)}#root,body,html{font-size:16px}.app{grid-template:2.4rem auto/100%}.navItems{width:60%}#about,#contact,#home{font-size:1.7rem}}</style><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">${titleDescriptionString}<style>${[...css].join('')}</style></head><body id="golden"><div id="main">`;

    await res.write(headerStream);



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