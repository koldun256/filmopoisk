"use client";
import useAppSearchParams from "../../features/search/searchSlice";
import classes from "./PageSwitcher.module.css";
import left from "./left.svg";
import leftDisabled from "./left-disabled.svg";
import right from "./right.svg";
import rightDisabled from "./right-disabled.svg";

type Props = { total_pages: number };
export default function PageSwitcher({ total_pages }: Props) {
  const [{ page: active }, setParam] = useAppSearchParams();
  const leftActive = active > 1;
  const rightActive = active < total_pages;
  const setPage = (page: number) => {
    setParam("page", page);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className={classes.container}>
      <div
        className={`${classes.button} ${leftActive && classes.active}`}
        onClick={() => leftActive && setPage(active - 1)}
      >
        <img src={leftActive ? left : leftDisabled} />
      </div>
      <div className={classes.indicator}>{active}</div>
      <div
        className={`${classes.button} ${rightActive && classes.active}`}
        onClick={() => rightActive && setPage(active + 1)}
      >
        <img src={rightActive ? right : rightDisabled} />
      </div>
    </div>
  );
}
