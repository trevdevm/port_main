import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import StyleContext from 'isomorphic-style-loader/StyleContext';
import { loadableReady } from "@loadable/component";
import App from "./components/App/App";

const insertCss = (...styles) => {
    const removeCss = styles.map(style => style._insertCss())
    return () => removeCss.forEach(dispose => dispose())
}

loadableReady(() => {
    const root = document.getElementById("main");
    hydrate(
        <BrowserRouter>
            <StyleContext.Provider value={{ insertCss }}>
                <App />
            </StyleContext.Provider>
        </BrowserRouter>,
        root);
})