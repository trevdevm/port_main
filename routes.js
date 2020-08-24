import React from "react";
import loadable from "@loadable/component";
import Load from "./devPort/components/Load";

const Body = loadable(() => import(/* webpackPrefetch: true */"./devPort/components/Body/Body"), {
  fallback: <Load />,
});

const Contact = loadable(() => import(/* webpackPrefetch: true */"./devPort/components/Contact/Contact"), {
  fallback: <Load />,
});

const About = loadable(() => import(/* webpackPrefetch: true */"./devPort/components/About/About"), {
  fallback: <Load />,
});


export const routes = [
  {
    path: "/",
    exact: true,
    component: Body,
    id: "Body"
  },
  {
    path: "/about",
    component: About,
    id: "About"
  },
  {
    path: "/contact",
    component: Contact,
    id: "Contact"
  }
];


/* module.exports = {
  routes
} */




















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