import type { MovieSummary, MovieDetails } from "../types/domain";
import type { IMovieService } from "../types/services";

class TheMovieDBService implements IMovieService {
  async getAll(): Promise<MovieSummary[]> {
    return [];
  }

  async getOne(id: string): Promise<MovieDetails | null> {
    return null;
  }
}

export default TheMovieDBService;
