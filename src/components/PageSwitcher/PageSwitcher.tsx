import useAppSearchParams from "../../features/search/searchSlice";
import classes from "./PageSwitcher.module.css";

type Props = { total_pages: number };
export default function PageSwitcher({ total_pages }: Props) {
  const [{ page: active }, setParam] = useAppSearchParams();
  return (
    <div className={classes.container}>
      {Array.from({ length: total_pages }).map((_, i) => (
        <div
          key={i}
          onClick={() => {
            setParam("page", i + 1);
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          className={`${classes.button} ${active == i + 1 && classes.active}`}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
}
