import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import Header from "../../components/Header/Header";
import classes from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { id } = useParams();
  const { data: movie, error, isLoading } = api.useGetMovieByIdQuery(id!);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <div>
      <Header />
      <div className={classes.info}>
        <img src={movie!.poster} />
        <div>
          <h2>{movie!.title}</h2>
          <p>
            <b>Жанр:</b> {movie!.genre}
          </p>
          <p>
            <b>Год выпуска:</b> {movie!.release_year}
          </p>
          <p>
            <b>Описание:</b>{" "}
          </p>
          <p>{movie!.description}</p>
        </div>
      </div>
      <h1 style={{ marginLeft: 24 }}>Актеры</h1>
      <div className={classes.actors}>
        <div className={classes.actorsContainer}>
          {movie!.actors.map((actor) => (
            <div className={classes.actor}>
              <div className={classes.posterContainer}>
                <img src={actor.photo} />
              </div>
              <div className={classes.name}>{actor.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
