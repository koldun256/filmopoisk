import { useEffect, useState } from "react";

export default function useDebounce<V>(value: V, timeout: number) {
  const [prev, setPrev] = useState<V>(value);
  const [timer, setTimer] = useState<number>();
  useEffect(() => {
    if (timer) clearTimeout(timer);
    setTimer(
      setTimeout(() => {
        setPrev(value);
        setTimer(undefined);
      }, timeout)
    );
  }, [value]);
  return prev;
}
