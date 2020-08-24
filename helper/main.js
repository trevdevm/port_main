import React from "react";
import { hydrate } from "react-dom";
import App from "../ssr/components/App/App";

hydrate(<App />, document.getElementById("main"));
