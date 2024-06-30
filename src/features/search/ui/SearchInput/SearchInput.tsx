import { useDispatch } from "react-redux";
import { setSearchParam } from "../../searchSlice";
import classes from "./SearchInput.module.css";

export default function SearchInput() {
  const dispatch = useDispatch();
  return (
    <input
      className={classes.input}
      onChange={(e) => dispatch(setSearchParam(["title", e.target.value]))}
      placeholder="Название фильма"
    />
  );
}
