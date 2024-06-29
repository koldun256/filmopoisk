import { useState } from "react";
import { useAppDispatch } from "../../../../store";
import { login } from "../../authSlice";

export default function LoginForm() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const onSubmit = () => {
    dispatch(login({ username, password }));
    setUsername("");
    setPassword("");
  };
  return (
    <dialog open={true}>
      <input onChange={(e) => setUsername(e.target.value)} value={username} />
      <input onChange={(e) => setPassword(e.target.value)} value={password} />
      <button onClick={onSubmit}>Login</button>
    </dialog>
  );
}
