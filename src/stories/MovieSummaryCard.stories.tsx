import { MemoryRouter } from "react-router";
import { MovieSummaryCard } from "../components/MovieSummaryCard";
import type { MovieSummary } from "../types/domain";

export default {
  title: "Components/MovieSummaryCard",
  component: MovieSummaryCard,
};

const exampleMovie: MovieSummary = {
  id: "1",
  name: "Inception",
  year: 2010,
  poster_path: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
};

export const Default = () => (
  <MemoryRouter>
    <div style={{ width: "200px", margin: "auto" }}>
      <MovieSummaryCard movie={exampleMovie} />
    </div>
  </MemoryRouter>
);
