import { createContext } from "react";
import type { IMovieService } from "../types/services";

export const MovieServiceContext = createContext<IMovieService | null>(null);
