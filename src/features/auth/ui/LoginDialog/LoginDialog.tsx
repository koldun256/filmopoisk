import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { LoginStatus, login, selectStatus } from "../../authSlice";
import ReactDOM from "react-dom";

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
    <dialog open={open}>
      <input onChange={(e) => setUsername(e.target.value)} value={username} />
      <input onChange={(e) => setPassword(e.target.value)} value={password} />
      <button onClick={onSubmit}>Войти</button>
      <button onClick={close}>Закрыть</button>
      {status == LoginStatus.Failed && <div>Неправильный логин или пароль</div>}
      {status == LoginStatus.Pending && <div>Ожидание...</div>}
    </dialog>,
    document.body
  );
}
