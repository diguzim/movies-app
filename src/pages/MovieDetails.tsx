import { useParams } from "react-router";
import { DefaultLayout } from "../components";
import { useMovieService } from "../hooks";
import { useEffect, useState } from "react";
import type { MovieDetails } from "../types/domain";
import { FaRegCirclePlay } from "react-icons/fa6";

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null as MovieDetails | null);
  const { getOne } = useMovieService();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const fetchedMovie = await getOne(movieId as string);
        setMovie(fetchedMovie);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    };
    fetchMovie();
  }, [getOne, movieId]);

  if (!movie) {
    return (
      <DefaultLayout title="Loading..." showBack>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h1>Loading movie details...</h1>
        </div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout title="Movie details" showBack>
      <div style={{ backgroundColor: '#746A64', height: "56px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <p style={{ color: 'white', marginLeft: '16px', fontSize: '20px', fontWeight: '500', lineHeight: '24px', letterSpacing: '0.15px' }}>
          {movie.name}
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: '24px' }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
          <img
            src={movie.poster_path}
            alt={`${movie.name} poster`}
            style={{ width: '115px', height: 'auto', objectFit: 'cover' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
            <p style={{ fontWeight: '400', fontSize: "20px", lineHeight: "24px", letterSpacing: "0", color: "#212121" }}>{movie.year}</p>
            <p style={{ fontWeight: '400', fontSize: "14px", lineHeight: "24px", letterSpacing: "0", color: "#212121", fontStyle: "italic" }}>120 mins</p>
            <p style={{ fontWeight: '700', fontSize: "14px", lineHeight: "24px", letterSpacing: "0", color: "#212121", flex: 1, display: "flex", alignItems: 'center' }}>{movie.vote_average}/10</p>
            <button style={{ width: '100%', height: '56px', backgroundColor: '#746A64', color: 'white', border: 'none', borderRadius: '2px', cursor: 'pointer' }}>
              <span style={{ fontWeight: "500", fontSize: "16px", lineHeight: "24px", letterSpacing: "0" }}>Add to Favorite</span>
            </button>
          </div>
        </div>
        <p style={{ fontWeight: '500', fontSize: "14px", lineHeight: "24px", letterSpacing: "0", color: "#757575" }}>{movie.overview}</p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ fontWeight: '500', fontSize: "14px", lineHeight: "24px", letterSpacing: "2%" }}>TRAILERS</h2>
          <hr style={{ border: '1px solid #E0E0E0', margin: '0 0 12px 0' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '24px', padding: '18px', backgroundColor: '#FAFAFA' }}>
              <FaRegCirclePlay color="#746A64" />
              <span style={{ color: '#757575' }}>Play trailer 1</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '24px', padding: '18px', backgroundColor: '#FAFAFA' }}>
              <FaRegCirclePlay color="#746A64" />
              <span style={{ color: '#757575' }}>Play trailer 2</span>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
