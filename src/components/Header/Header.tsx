import { Link } from "react-router-dom";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <div className={classes.header}>
      <Link to="/" className={classes.title}>
        ФИЛЬМОПОИСК
      </Link>
    </div>
  );
}
