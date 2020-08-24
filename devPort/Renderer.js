import React from "react";
import { Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { routes } from "../routes";

const Renderer = (props) => {

    return
    { renderRoutes(routes, null, { location: props.location }) }
}

export default Renderer;
