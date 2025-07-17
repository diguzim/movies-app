import type { MovieSummary, MovieDetails } from "../types/domain";
import type { IMovieService } from "../types/services";

const MOVIE_SUMMARY_ARRAY: MovieSummary[] = [
  { id: "1", name: "Inception", year: 2010, poster_path: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg" },
  { id: "2", name: "The Matrix", year: 1999, poster_path: "https://upload.wikimedia.org/wikipedia/en/9/94/The_Matrix.jpg" },
  { id: "3", name: "Interstellar", year: 2014, poster_path: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg" },
  { id: "4", name: "The Dark Knight", year: 2008, poster_path: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg" },
  { id: "5", name: "Pulp Fiction", year: 1994, poster_path: "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg" },
];

const MOVIE_DETAILS: MovieDetails = {
  id: "1",
  name: "Inception",
  year: 2010,
  poster_path: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
  overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  vote_average: 8.8,
};

class FakeMovieService implements IMovieService {
  async getAll(): Promise<MovieSummary[]> {
    return MOVIE_SUMMARY_ARRAY;
  }

  async getOne(id: string): Promise<MovieDetails | null> {
    return MOVIE_DETAILS;
  }
}

export default FakeMovieService;
