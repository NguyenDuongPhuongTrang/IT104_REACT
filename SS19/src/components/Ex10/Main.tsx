import { useState } from "react";
import Item from "./Item";

export default function Main() {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    setSelected(index);
  };

  return (
    <div>
      <h2>Danh sách 100 item</h2>
      {Array.from({ length: 100 }, (_, i) => (
        <Item
          key={i}
          index={i}
          isSelected={selected === i}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
}
