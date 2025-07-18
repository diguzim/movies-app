import { render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import { MovieDetails } from "./MovieDetails";
import { useMovieService } from "../hooks";
import { useParams } from "react-router";
import type { MovieDetails as MovieDetailsType } from "../types/domain";

// Mock the useParams and useMovieService hooks
vi.mock("react-router", () => ({
    useParams: vi.fn(),
    useNavigate: vi.fn(),
}));

vi.mock("../hooks", () => ({
    useMovieService: vi.fn(),
}));

const mockMovie: MovieDetailsType = {
    id: "1",
    name: "Movie 1",
    year: 2021,
    poster_path: "poster1.jpg",
    overview: "This is a mock overview.",
    vote_average: 8.5,
};

describe("MovieDetails", () => {
    it("renders the layout and fetches movie details", async () => {
        const getOneMock = vi.fn().mockResolvedValue(mockMovie);
        (useMovieService as vi.Mock).mockReturnValue({ getOne: getOneMock });
        (useParams as vi.Mock).mockReturnValue({ movieId: "1" });

        render(<MovieDetails />);

        // Check if the loading state is rendered
        expect(screen.getByText("Loading movie details...")).toBeInTheDocument();

        // Wait for movie details to be fetched and displayed
        await waitFor(() => {
            expect(screen.getByText("Movie 1")).toBeInTheDocument();
            expect(screen.getByText("2021")).toBeInTheDocument();
            expect(screen.getByText("This is a mock overview.")).toBeInTheDocument();
            expect(screen.getByAltText("Movie 1 poster")).toBeInTheDocument();
        });

        // Verify the mock function was called
        expect(getOneMock).toHaveBeenCalledTimes(1);
    });

    it("handles fetch errors gracefully", async () => {
        const getOneMock = vi.fn().mockRejectedValue(new Error("Fetch error"));
        (useMovieService as vi.Mock).mockReturnValue({ getOne: getOneMock });
        (useParams as vi.Mock).mockReturnValue({ movieId: "1" });

        // Suppress console error logs
        const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => { });

        render(<MovieDetails />);

        // Wait for the fetch attempt
        await waitFor(() => {
            expect(getOneMock).toHaveBeenCalledTimes(1);
        });

        // Ensure the loading state remains
        expect(screen.getByText("Loading movie details...")).toBeInTheDocument();

        // Restore console error logs
        consoleErrorSpy.mockRestore();
    });
});
