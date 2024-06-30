import { SearchQuery } from "../../services/api";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

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
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const parsedParams: Record<string, any> = Object.fromEntries(searchParams);
  if (parsedParams.page) parsedParams.page = parseInt(parsedParams.page);
  return [
    { ...defaultQuery, ...parsedParams },
    (key, val) => {
      if (key != "page") parsedParams.page = "1";
      if (!val) delete parsedParams[key];
      else parsedParams[key] = val?.toString();

      const paramsStr = new URLSearchParams(parsedParams).toString();
      router.push(pathname + "?" + paramsStr);
    },
  ];
}
