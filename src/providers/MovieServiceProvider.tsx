import { MovieServiceContext } from "../contexts";
import FakeMovieService from "../services/FakeMovieService";

export const MovieServiceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const service = new FakeMovieService();

  return (
    <MovieServiceContext.Provider value={service}>
      {children}
    </MovieServiceContext.Provider>
  );
};
