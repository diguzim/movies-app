import { useParams } from "react-router";
import { DefaultLayout } from "../components";

export function MovieDetails() {
  let { movieId } = useParams();

  return (
    <DefaultLayout title="Movie details" showBack>
      <h1>Hello, world!</h1>
      <p>Movie ID: {movieId}</p>
    </DefaultLayout>
  );
}
