import { useContext } from "react";
import type { IMovieService } from "../types/services";
import { MovieServiceContext } from "../contexts";

export const useMovieService = (): IMovieService => {
  const context = useContext(MovieServiceContext);
  if (!context)
    throw new Error("useMovieService must be used within MovieServiceProvider");
  return context;
};
