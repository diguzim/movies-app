import Home from "./pages/Home";

import { Route, Routes as ReactRouterRoutes } from "react-router";

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<Home />} />
    </ReactRouterRoutes>
  );
};
