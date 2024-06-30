"use client";
import checkedSvg from "./star-checked.svg";
import uncheckedSvg from "./star-unchecked.svg";
type Props = {
  select: () => void;
  selected: boolean;
};
export default function Star({ select, selected }: Props) {
  return (
    <img
      src={selected ? checkedSvg : uncheckedSvg}
      width={16}
      height={16}
      onClick={(e) => {
        select();
        e.preventDefault();
      }}
    />
  );
}
