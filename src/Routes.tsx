import Home from "./pages/Home";

import {
  Route,
  Routes as ReactRouterRoutes,
  BrowserRouter,
} from "react-router";

export const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRouterRoutes>
        <Route path="/" element={<Home />} />
      </ReactRouterRoutes>
    </BrowserRouter>
  );
};
