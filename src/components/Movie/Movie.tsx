import { selectLoggedIn } from "../../features/auth/authSlice";
import ScoreBar from "../../features/score/ui/ScoreBar/ScoreBar";
import { ShortMovieInfo } from "../../models/movie";
import { useAppSelector } from "../../store";
import classes from "./Movie.module.css";
export default function Movie(info: ShortMovieInfo) {
  const loggedIn = useAppSelector(selectLoggedIn);
  return (
    <div className={classes.movie}>
      <img src={info.poster} />
      <div className={classes.info}>
        <div className={classes.title}>{info.title}</div>
        <table>
          <tbody>
            <tr>
              <td className={classes.hint}>Жанр</td>
              <td className={classes.data}>
                {info.genre.charAt(0).toUpperCase() + info.genre.slice(1)}
              </td>
            </tr>
            <tr>
              <td className={classes.hint}>Год выпуска</td>
              <td className={classes.data}>{info.release_year}</td>
            </tr>
            <tr>
              <td className={classes.hint}>Описание</td>
              <td className={classes.data}>{info.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {loggedIn && (
        <div className={classes.scoreContainer}>
          <ScoreBar movieId={info.id} />
        </div>
      )}
    </div>
  );
}
