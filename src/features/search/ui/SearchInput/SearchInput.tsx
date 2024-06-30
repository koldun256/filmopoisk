import classes from "./SearchInput.module.css";
import useAppSearchParams from "../../searchSlice";
import { useEffect, useState } from "react";
import useDebounce from "../../../../hooks/useDebounce";

export default function SearchInput() {
  const [{ title }, setParam] = useAppSearchParams();
  const [input, setInput] = useState(title);
  const debouncedInput = useDebounce(input, 200);
  useEffect(() => setParam("title", debouncedInput), [debouncedInput]);
  return (
    <input
      className={classes.input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Название фильма"
      value={input || ""}
      type="search"
    />
  );
}
