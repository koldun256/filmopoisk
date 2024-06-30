import { SearchQuery } from "../../services/api";
import { useSearchParams } from "react-router-dom";

const defaultQuery: SearchQuery = {
  sort_by: "rating",
  order: "desc",
  page: 1,
  limit: 10,
};

type SetParam<T extends keyof SearchQuery> = (
  param: T,
  value: SearchQuery[T]
) => void;
export default function useAppSearchParams<T extends keyof SearchQuery>(): [
  SearchQuery,
  SetParam<T>
] {
  const [searchParams, setSearchParams] = useSearchParams();
  const parsedParams = Object.fromEntries(searchParams);
  return [
    { ...defaultQuery, ...parsedParams },
    (key, val) => {
      if (!val) delete parsedParams[key];
      else parsedParams[key] = val?.toString();
      setSearchParams(parsedParams);
    },
  ];
}
