import { MovieServiceContext } from "../contexts";
import TheMovieDBService from "../services/TheMovieDBService";

export const MovieServiceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const service = new TheMovieDBService();

  return (
    <MovieServiceContext.Provider value={service}>
      {children}
    </MovieServiceContext.Provider>
  );
};
