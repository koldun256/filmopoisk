import { useState } from "react";
import Dropdown from "../../../../components/Dropdown/Dropdown";

export default function SearchParams() {
  const [a, b] = useState("bipki");
  return (
    <div>
      {a}
      <Dropdown
        options={[
          {
            value: "bipki",
            text: "Бипки",
          },
          {
            value: "bipki2",
            text: "Бипки два",
          },
        ]}
        select={b}
        selected={a}
      />
    </div>
  );
}
