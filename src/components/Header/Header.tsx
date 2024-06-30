import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import LoginButton from "../../features/auth/ui/LoginButton/LoginButton";

export default function Header() {
  return (
    <header className={classes.header}>
      <Link to="/" className={classes.title}>
        ФИЛЬМОПОИСК
      </Link>
      <LoginButton />
    </header>
  );
}
