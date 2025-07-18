import { render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import { Home } from "./Home";
import { useMovieService } from "../hooks";
import type { MovieSummary } from "../types/domain";

// Mock the useMovieService hook
vi.mock('react-router', () => ({
    useNavigate: vi.fn(),
}));

vi.mock("../hooks", () => ({
    useMovieService: vi.fn(),
}));

const mockMovies: MovieSummary[] = [
    { id: "1", name: "Movie 1", year: 2021, poster_path: "poster1.jpg" },
    { id: "2", name: "Movie 2", year: 2022, poster_path: "poster2.jpg" },
];

describe("Home", () => {
    it("renders the layout and fetches movies", async () => {
        const getAllMock = vi.fn().mockResolvedValue(mockMovies);
        (useMovieService as vi.Mock).mockReturnValue({ getAll: getAllMock });

        render(<Home />);

        // Check if the layout title is rendered
        expect(screen.getByText("Pop Movies")).toBeInTheDocument();

        // Wait for movies to be fetched and displayed
        await waitFor(() => {
            expect(screen.getByAltText("Movie 1 poster")).toBeInTheDocument();
            expect(screen.getByAltText("Movie 2 poster")).toBeInTheDocument();
        });

        // Verify the mock function was called
        expect(getAllMock).toHaveBeenCalledTimes(1);
    });

    it("handles fetch errors gracefully", async () => {
        const getAllMock = vi.fn().mockRejectedValue(new Error("Fetch error"));
        (useMovieService as vi.Mock).mockReturnValue({ getAll: getAllMock });

        // Suppress console error logs
        const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => { });

        render(<Home />);

        // Wait for the fetch attempt
        await waitFor(() => {
            expect(getAllMock).toHaveBeenCalledTimes(1);
        });

        // Ensure no movies are displayed
        expect(screen.queryByText("Movie 1")).not.toBeInTheDocument();
        expect(screen.queryByText("Movie 2")).not.toBeInTheDocument();

        // Restore console error logs
        consoleErrorSpy.mockRestore();
    });
});
