import { useDispatch } from "react-redux";
import { selectQuery, setSearchParam } from "../../searchSlice";
import classes from "./SearchInput.module.css";
import { useState } from "react";
import { useAppSelector } from "../../../../store";

export default function SearchInput() {
  const dispatch = useDispatch();
  const { title } = useAppSelector(selectQuery);
  console.log(title);
  return (
    <input
      className={classes.input}
      onChange={(e) => dispatch(setSearchParam(["title", e.target.value]))}
      placeholder="Название фильма"
      value={title || ""}
      type="search"
    />
  );
}
