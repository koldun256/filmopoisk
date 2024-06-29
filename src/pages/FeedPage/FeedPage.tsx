import { useSearchQuery } from "../../features/movies/moviesSlice";
export default function HomePage() {
  const { data, error, isLoading } = useSearchQuery({});
  if (isLoading) return <div>Loading....</div>;
  const { search_result, total_pages } = data!;
  const movies = search_result.map((movie) => <div>{movie.title}</div>);
  return <div>{movies}</div>;
}
