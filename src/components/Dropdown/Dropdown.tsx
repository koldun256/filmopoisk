"use client";
import { useState } from "react";
import classes from "./Dropdown.module.css";

type Option<V> = {
  text: string;
  value: V;
};
type Props<V> = {
  options: Option<V>[];
  select: (value: V) => void;
  selected: V;
};
export default function Dropdown<V>({ options, select, selected }: Props<V>) {
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
          {options.map(({ text, value }, idx) => (
            <li
              key={idx}
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
