import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { LoginStatus, login, selectStatus } from "../../authSlice";
import ReactDOM from "react-dom";
import classes from "./LoginDialog.module.css";

type Props = {
  open: boolean;
  close: () => void;
};
export default function LoginDialog({ open, close }: Props) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();
  const onSubmit = () => {
    dispatch(login({ username, password }));
    setUsername("");
    setPassword("");
  };

  if (status == LoginStatus.LoggedIn) close();
  return ReactDOM.createPortal(
    <dialog open={open} className={classes.tint}>
      <div className={classes.window}>
        <h3>Авторизация</h3>
        <div>
          <label>
            Логин <span style={{ color: "red" }}>*</span>
          </label>
          <br />
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div>
          <label>
            Пароль <span style={{ color: "red" }}>*</span>
          </label>
          <br />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        {status == LoginStatus.Failed && (
          <div>Неправильный логин или пароль</div>
        )}
        {status == LoginStatus.Pending && <div>Ожидание...</div>}
        <div>
          <button onClick={onSubmit} className={classes.submit}>
            Войти
          </button>
          <button onClick={close} className={classes.cancel}>
            Отменить
          </button>
        </div>
      </div>
    </dialog>,
    document.body
  );
}
