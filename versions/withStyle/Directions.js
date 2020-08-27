import React from "react";
import { createRoutesFromArray } from "react-router-dom";
import loadable from "@loadable/component";
import Body from "./components/Body/Body";
import Load from "./components/Load";

const Contact = loadable(() => import(/* webpackPrefetch: true */"./components/Contact/Contact"), {
  fallback: <Load />,
});

const About = loadable(() => import(/* webpackPrefetch: true */"./components/About/About"), {
  fallback: <Load />,
});


const Directions = () => {
  const direction = createRoutesFromArray([
    { path: "/", element: <Body /> },
    { path: "/about", element: < About /> },
    { path: "/contact", element: <Contact /> }
  ]);

  return direction;
}


export default Directions;





















/* import React from 'react';
import { useRoutes } from 'react-router-dom';

function App() {
  let element = useRoutes([
    { path: '/', element: <Dashboard />, children: [
      { path: 'messages', element: <DashboardMessages /> },
      { path: 'tasks', element: <DashboardTasks /> }
    ]},
    { path: 'team', element: <AboutPage /> }
  ]);

  return element;
}
 */