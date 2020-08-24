import { Route } from "react-router-dom";

const RouteMap = routes => {
    
    const routeComps = routes.map((route) => {
        <Route key={route.id} path={route.path} component={route.component} {...props} />
    })

    return routeComps;

}