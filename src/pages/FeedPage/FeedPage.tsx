import { useGetMovieByIdQuery } from "../../features/movies/moviesSlice";
export default function HomePage() {
  const { data, error, isLoading } = useGetMovieByIdQuery("31");
  if (isLoading) return <div>Loading....</div>;
  return <div>{data?.title}</div>;
}
