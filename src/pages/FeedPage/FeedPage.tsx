import SearchInput from "../../features/search/ui/SearchInput/SearchInput";
import MovieList from "../../components/MovieList/MovieList";
import Header from "../../components/Header/Header";
export default function HomePage() {
  return (
    <div>
      <Header />
      <SearchInput />
      <MovieList />
    </div>
  );
}
