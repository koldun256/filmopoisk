import { selectLoggedIn } from "../../features/auth/authSlice";
import ScoreBar from "../../features/score/ui/ScoreBar/ScoreBar";
import { ShortMovieInfo } from "../../models/movie";
import { useAppSelector } from "../../store";

export default function Movie(info: ShortMovieInfo) {
  const loggedIn = useAppSelector(selectLoggedIn);
  return (
    <div>
      <h2>{info.title}</h2>
      <p>{info.description}</p>
      {loggedIn && <ScoreBar movieId={info.id} />}
    </div>
  );
}
