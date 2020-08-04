import React from "react";
import loadable from "@loadable/component";
import Body from "./components/Body/Body";
import Load from "./components/Load";

const Contact = loadable(() => import(/* webpackPrefetch: true */"./components/Contact/Contact"), {
  fallback: <Load />,
});

const About = loadable(() => import(/* webpackPrefetch: true */"./components/About/About"), {
  fallback: <Load />,
});


const Directions = [
  { path: "/", element: <Body /> },
  { path: "/about", element: < About /> },
  { path: "/contact", element: <Contact /> }
];


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