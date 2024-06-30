import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { Score, selectScore, setScore } from "../../scoreSlice";
import classes from "./ScoreBar.module.css";

type Props = {
  movieId: number;
};
export default function ScoreBar({ movieId }: Props) {
  const score = useAppSelector(selectScore(movieId));
  const dispatch = useAppDispatch();
  const select = (star: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(setScore({ id: movieId, score: star as Score }));
  };
  const stars: ReactNode[] = [];
  for (let i = 1; i <= 5; i++)
    stars.push(
      <div
        className={`${classes.star} ${i <= score && classes.active}`}
        onClick={select(i)}
      ></div>
    );
  return <div className={classes.scorebar}>{stars}</div>;
}
