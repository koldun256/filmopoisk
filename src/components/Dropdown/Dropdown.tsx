import { useState } from "react";
import classes from "./Dropdown.module.css";

type Option<V extends string> = {
  text: string;
  value: V;
};
type Props<V extends string> = {
  options: Option<V>[];
  select: (value: V) => void;
  selected: V;
};
export default function Dropdown<V extends string>({
  options,
  select,
  selected,
}: Props<V>) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.dropdown}>
      <button className={classes.dropdownToggle} onClick={toggleDropdown}>
        {options.find((option) => option.value == selected)?.text}
      </button>

      {isOpen && (
        <ul className={classes.dropdownMenu}>
          {options.map(({ text, value }) => (
            <li
              key={value}
              onClick={() => {
                select(value);
                setIsOpen(false);
              }}
            >
              {text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
