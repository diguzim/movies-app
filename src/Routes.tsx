import {
  Route,
  Routes as ReactRouterRoutes,
  BrowserRouter,
} from "react-router";
import { Home, MovieDetails, NotFound } from "./pages";

export const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </ReactRouterRoutes>
    </BrowserRouter>
  );
};
