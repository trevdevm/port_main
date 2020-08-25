import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import StyleContext from 'isomorphic-style-loader/StyleContext';
import { loadableReady } from "@loadable/component";

const insertCss = (...styles) => {
    const removeCss = styles.map(style => style._insertCss())
    return () => removeCss.forEach(dispose => dispose())
}


const root = document.getElementById("main");
ReactDOM.render(
    <BrowserRouter>
        <StyleContext.Provider value={{ insertCss }}>
            <App />
        </StyleContext.Provider>
    </BrowserRouter>,
    root);