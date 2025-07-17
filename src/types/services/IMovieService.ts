import type { MovieDetails, MovieSummary } from "../domain";

export interface IMovieService {
  getAll(): Promise<MovieSummary[]>;
  getOne(id: string): Promise<MovieDetails | null>;
}
