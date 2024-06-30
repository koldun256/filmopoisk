import classes from "./SearchInput.module.css";
import useAppSearchParams from "../../searchSlice";

export default function SearchInput() {
  const [{ title }, setParam] = useAppSearchParams();
  return (
    <input
      className={classes.input}
      onChange={(e) => setParam("title", e.target.value)}
      placeholder="Название фильма"
      value={title || ""}
      type="search"
    />
  );
}
