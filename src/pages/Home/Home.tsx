import { useMovieService } from "../../hooks";

const Home = () => {
  const movieService = useMovieService();
  console.log("🚀 ~ Home ~ movieService:", movieService);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
