import React from "react";
import type { MovieSummary } from "../types/domain";

interface MovieSummaryCardProps {
  movie: MovieSummary;
}

export const MovieSummaryCard: React.FC<MovieSummaryCardProps> = ({ movie }) => {
  return (
    <div style={{width: "100%", height: "auto", aspectRatio: "2/3", overflow: "hidden"}}>
      <img
        src={movie.poster_path}
        alt={`${movie.name} poster`}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
    </div>
  );
};

