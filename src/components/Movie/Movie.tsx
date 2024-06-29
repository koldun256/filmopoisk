import { ShortMovieInfo } from "../../models/movie";

export default function Movie(info: ShortMovieInfo) {
  return (
    <div>
      <h2>{info.title}</h2>
      <p>{info.description}</p>
    </div>
  );
}
