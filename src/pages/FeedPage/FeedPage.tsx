import { Link } from "react-router-dom";
import Movie from "../../components/Movie/Movie";
import { api } from "../../services/api";
export default function HomePage() {
  const { data, error, isLoading } = api.useSearchQuery({});

  return (
    <div>
      {isLoading && "Loading..."}
      {error && "Error"}
      {data &&
        data.search_result.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <Movie {...movie} />
          </Link>
        ))}
    </div>
  );
}
