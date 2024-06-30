"use client";
import { selectLoggedIn } from "../../../features/auth/authSlice";
import ScoreBar from "../../../features/score/ui/ScoreBar/ScoreBar";
import { api } from "../../../services/api";
import { useAppSelector } from "../../../store";
import classes from "./page.module.css";

export default function MovieDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  if (!params.id) return <div>No movie selected</div>;
  const loggedIn = useAppSelector(selectLoggedIn);
  const {
    data: movie,
    error,
    isLoading,
  } = api.useGetMovieByIdQuery(params.id!);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <main>
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
        {loggedIn && (
          <div className={classes.scoreContainer}>
            <ScoreBar movieId={parseInt(params.id)} />
          </div>
        )}
      </div>
      <h1 style={{ marginLeft: 24 }}>Актеры</h1>
      <div className={classes.actors}>
        <div className={classes.actorsContainer}>
          {movie!.actors.map((actor) => (
            <div className={classes.actor} key={actor.name}>
              <div className={classes.posterContainer}>
                <img src={actor.photo} />
              </div>
              <div className={classes.name}>{actor.name}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
