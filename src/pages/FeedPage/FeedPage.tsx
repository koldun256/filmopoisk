import SearchInput from "../../features/search/ui/SearchInput/SearchInput";
import MovieList from "../../components/MovieList/MovieList";
import Header from "../../components/Header/Header";
import classes from "./FeedPage.module.css";
import SearchParams from "../../features/search/ui/SearchParams/SearchParams";
export default function FeedPage() {
  console.log(classes);
  return (
    <>
      <Header />
      <main className={classes.feedPage}>
        <div className={classes.col1}>
          <SearchParams />
        </div>
        <div className={classes.col2}>
          <SearchInput />
          <MovieList />
        </div>
      </main>
    </>
  );
}
