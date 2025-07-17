import React from "react";
import { useNavigate } from "react-router";
import type { MovieSummary } from "../types/domain";

interface MovieSummaryCardProps {
  movie: MovieSummary;
}

export const MovieSummaryCard: React.FC<MovieSummaryCardProps> = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{ width: "100%", height: "auto", aspectRatio: "2/3", overflow: "hidden", cursor: "pointer" }}
      onClick={() => navigate(`/movies/${movie.id}`)}
    >
      <img
        src={movie.poster_path}
        alt={`${movie.name} poster`}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
    </div>
  );
};

