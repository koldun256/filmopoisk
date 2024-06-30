import Dropdown from "../../../../components/Dropdown/Dropdown";
import { GENRES_MAP, GenresEnglish, YEARS } from "../../../../models/movie";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { selectQuery, setSearchParam } from "../../searchSlice";
import classes from "./SearchParams.module.css";

const genreOptions: {
  text: string;
  value: undefined | GenresEnglish;
}[] = [
  { text: "Не выбран", value: undefined },
  ...Object.entries(GENRES_MAP).map(([value, text]) => ({
    value: value as GenresEnglish,
    text: text.charAt(0).toUpperCase() + text.slice(1),
  })),
];

const yearOptions = [
  { text: "Не выбран", value: undefined },
  ...Object.entries(YEARS).map(([value, text]) => ({ value, text })),
];
export default function SearchParams() {
  const { genre, release_year } = useAppSelector(selectQuery);
  const dispatch = useAppDispatch();
  return (
    <div className={classes.panel}>
      <div className={classes.title}>Фильтр</div>
      <div>
        <div className={classes.label}>Жанр</div>
        <Dropdown
          options={genreOptions}
          select={(genre) => dispatch(setSearchParam(["genre", genre]))}
          selected={genre}
        />
      </div>
      <div>
        <div className={classes.label}>Год</div>
        <Dropdown
          options={yearOptions}
          select={(year) => dispatch(setSearchParam(["release_year", year]))}
          selected={release_year}
        />
      </div>
    </div>
  );
}
