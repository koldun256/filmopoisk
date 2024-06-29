import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { logOut, selectLoggedIn } from "../../authSlice";
import LoginDialog from "../LoginDialog/LoginDialog";

export default function LoginButton() {
  const loggedIn = useAppSelector(selectLoggedIn);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <LoginDialog open={open} close={() => setOpen(false)} />
      {loggedIn ? (
        <button onClick={() => dispatch(logOut())}>Выйти</button>
      ) : (
        <button onClick={() => setOpen(true)}>Войти</button>
      )}
    </>
  );
}
