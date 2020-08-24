import { matchPath } from "react-router-dom";

const loadBranchData = location => {
  const branch = matchRoutes(routes, location.pathname);

  const promises = branch.map(({ route, match }) => {
    return route.loadData ? route.loadData(match) : Promise.resolve(null);
  });

  return Promise.all(promises);
};

const paths = ['/', '/about', '/contact'];

const loadData = location => {
  const pathName = location;
  const paths = ['/', '/about', '/contact'];
  paths.forEach((path) => {
    if (path === pathName) {
      return path;
    }
  })

  return location;
}