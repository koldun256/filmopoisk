import { useParams } from "react-router-dom";
import { api } from "../../services/api";

export default function MovieDetailsPage() {
  const { id } = useParams();
  const { data: movie, error, isLoading } = api.useGetMovieByIdQuery(id!);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <div>
      <h1>Movie Details</h1>
      <h2>{movie!.title}</h2>
      <p>{movie!.description}</p>
    </div>
  );
}
