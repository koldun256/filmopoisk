import { selectQuery, setSearchParam } from "../../features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import classes from "./PageSwitcher.module.css";

type Props = { total_pages: number };
export default function PageSwitcher({ total_pages }: Props) {
  const { page: active } = useAppSelector(selectQuery);
  const dispatch = useAppDispatch();
  return (
    <div className={classes.container}>
      {Array.from({ length: total_pages }).map((_, i) => (
        <div
          key={i}
          onClick={() => dispatch(setSearchParam(["page", i + 1]))}
          className={`${classes.button} ${active == i + 1 && classes.active}`}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
}
