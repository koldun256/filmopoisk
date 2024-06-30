import { useAppDispatch, useAppSelector } from "../../../../store";
import { Score, selectScore, setScore } from "../../scoreSlice";
import classes from "./ScoreBar.module.css";
import Star from "../Star/Star";

type Props = { movieId: number };
export default function ScoreBar({ movieId }: Props) {
  const score = useAppSelector(selectScore(movieId));
  const dispatch = useAppDispatch();
  const select = (star: number) => {
    dispatch(
      setScore({
        id: movieId,
        score: star == score ? null : (star as Score),
      })
    );
  };
  return (
    <table className={classes.scorebar}>
      <tbody>
        <tr>
          {Array.from({ length: 5 }).map((_, i) => (
            <td key={i}>
              <Star
                selected={!!score && i + 1 <= score}
                select={() => select(i + 1)}
              />
            </td>
          ))}
        </tr>
        <tr>
          {Array.from({ length: 5 }).map((_, i) => (
            <td key={i}>{i + 1}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
