"use client";
import classes from "./Header.module.css";
import LoginButton from "../../features/auth/ui/LoginButton/LoginButton";
import { useAppSelector } from "../../store";
import { selectLoggedIn } from "../../features/auth/authSlice";
import person from "./person.svg";
import Link from "next/link";

export default function Header() {
  const loggedIn = useAppSelector(selectLoggedIn);
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.title}>
        Фильмопоиск
      </Link>
      {loggedIn && (
        <div className={classes.ava}>
          <img src={person}></img>
        </div>
      )}
      <LoginButton />
    </header>
  );
}
