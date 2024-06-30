import MovieList from "../components/MovieList/MovieList";
import SearchInput from "../features/search/ui/SearchInput/SearchInput";
import SearchParams from "../features/search/ui/SearchParams/SearchParams";
import classes from "./page.module.css";

export default function Page() {
  return (
    <main className={classes.feedPage}>
      <div className={classes.col1}>
        <SearchParams />
      </div>
      <div className={classes.col2}>
        <SearchInput />
        <MovieList />
      </div>
    </main>
  );
}
