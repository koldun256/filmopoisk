import { useDispatch } from "react-redux";
import { setSearchParam } from "../../searchSlice";

export default function SearchInput() {
  const dispatch = useDispatch();
  return (
    <input
      onChange={(e) => dispatch(setSearchParam(["title", e.target.value]))}
    />
  );
}
