import { Link } from "react-router-dom";
import Movie from "../../components/Movie/Movie";
import { api } from "../../services/api";
import { selectQuery } from "../../features/search/searchSlice";
import { useAppSelector } from "../../store";
import classes from "./MovieList.module.css";
import PageSwitcher from "../PageSwitcher/PageSwitcher";
export default function MovieList() {
  const searchQuery = useAppSelector(selectQuery);
  const { data, error, isLoading } = api.useSearchQuery(searchQuery);
  if (isLoading) return "Loading...";
  if (error) return "Error";
  const { search_result, total_pages } = data!;
  return (
    <div className={classes.movieList}>
      {search_result.map((movie) => (
        <Link to={`/movie/${movie.id}`} key={movie.id}>
          <Movie {...movie} />
        </Link>
      ))}
      <PageSwitcher total_pages={total_pages} />
    </div>
  );
}
