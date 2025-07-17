import { useEffect, useState } from "react";
import { useMovieService } from "../../hooks";
import type { MovieSummary } from "../../types/domain";
import { DefaultLayout, MovieSummaryCard } from "../../components";

const Home = () => {
  const [movies, setMovies] = useState([] as MovieSummary[]);
  const { getAll } = useMovieService();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await getAll();
        setMovies(fetchedMovies);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchMovies();
  }, [getAll]);

  return (
    <DefaultLayout title="Pop Movies">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0", width: "100vw", height: "100%" }}> 
        {movies.map((movie) => (
          <MovieSummaryCard key={movie.id} movie={movie} />
        ))}
      </div>
    </DefaultLayout>
  );
};

export default Home;
