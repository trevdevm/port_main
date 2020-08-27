import React from "react";
import { hydrate } from "react-dom";
import { loadableReady } from "@loadable/component";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App/App";

loadableReady(() => {
    const root = document.getElementById("main");
    hydrate(
        <Router>
            <App />
        </Router>,
        root);
});