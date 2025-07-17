import { MovieSummary, MovieDetails } from "../src/types";

class TheMovieDBService {
  getAll(): MovieSummary[] {
    return [
      {
        id: "1",
        name: "Inception",
        year: 2010,
        poster_path: "/inception.jpg",
      },
      {
        id: "2",
        name: "The Matrix",
        year: 1999,
        poster_path: "/matrix.jpg",
      },
      {
        id: "3",
        name: "Interstellar",
        year: 2014,
        poster_path: "/interstellar.jpg",
      },
    ];
  }

  getOneWithDetails(id: string): MovieDetails | null {
    const movies: Record<string, MovieDetails> = {
      "1": {
        id: "1",
        name: "Inception",
        year: 2010,
        poster_path: "/inception.jpg",
        vote_average: 8.8,
        overview:
          "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
      },
      "2": {
        id: "2",
        name: "The Matrix",
        year: 1999,
        poster_path: "/matrix.jpg",
        vote_average: 8.7,
        overview:
          "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
      },
      "3": {
        id: "3",
        name: "Interstellar",
        year: 2014,
        poster_path: "/interstellar.jpg",
        vote_average: 8.6,
        overview:
          "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      },
    };
    return movies[id] || null;
  }
}

export default TheMovieDBService;
