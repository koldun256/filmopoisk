import { Link } from "react-router-dom";
import Movie from "../../components/Movie/Movie";
import { api } from "../../services/api";
import useAppSearchParams from "../../features/search/searchSlice";
import classes from "./MovieList.module.css";
import PageSwitcher from "../PageSwitcher/PageSwitcher";
import { ShortMovieInfo } from "../../models/movie";
export default function MovieList() {
  const [searchQuery] = useAppSearchParams();
  const { data, error, isLoading, isFetching } =
    api.useSearchQuery(searchQuery);
  if (isLoading || isFetching) return "Loading...";
  if (error) return "Error";
  const { search_result, total_pages } = data!;
  return (
    <div className={classes.movieList}>
      {search_result.map((movie: ShortMovieInfo) => (
        <Link to={`/movie/${movie.id}`} key={movie.id}>
          <Movie {...movie} />
        </Link>
      ))}
      <PageSwitcher total_pages={total_pages} />
    </div>
  );
}
