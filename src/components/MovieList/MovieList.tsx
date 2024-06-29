import { Link } from "react-router-dom";
import Movie from "../../components/Movie/Movie";
import { api } from "../../services/api";
import { selectQuery } from "../../features/search/searchSlice";
import { useAppSelector } from "../../store";
export default function MovieList() {
  const searchQuery = useAppSelector(selectQuery);
  const { data, error, isLoading } = api.useSearchQuery(searchQuery);

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
