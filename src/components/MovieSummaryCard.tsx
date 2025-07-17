import React from "react";
import type { MovieSummary } from "../types/domain";

interface MovieSummaryCardProps {
  movie: MovieSummary;
}

export const MovieSummaryCard: React.FC<MovieSummaryCardProps> = ({ movie }) => {
  return (
    <div style={{maxWidth: "300px" }}>
      <img
        src={movie.poster_path}
        alt={`${movie.name} poster`}
        style={{ width: "100%" }}
      />
    </div>
  );
};

