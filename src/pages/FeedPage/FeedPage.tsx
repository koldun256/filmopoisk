import SearchInput from "../../features/search/ui/SearchInput/SearchInput";
import MovieList from "../../components/MovieList/MovieList";
export default function HomePage() {
  return (
    <div>
      <SearchInput />
      <MovieList />
    </div>
  );
}
