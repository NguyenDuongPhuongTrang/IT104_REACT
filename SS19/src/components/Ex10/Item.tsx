import React, { memo } from "react";

type ItemProps = {
  index: number;
  isSelected: boolean;
  onSelect: (index: number) => void;
};

const Item: React.FC<ItemProps> = ({ index, isSelected, onSelect }) => {
  console.log("Render item:", index);

  return (
    <div
      style={{
        padding: "10px",
        margin: "5px",
        border: "1px solid gray",
        backgroundColor: isSelected ? "lightgreen" : "white",
      }}
    >
      <span>Index: {index}</span>
      <button onClick={() => onSelect(index)} style={{ marginLeft: "10px" }}>
        {isSelected ? "Đang chọn" : "Chọn"}
      </button>
    </div>
  );
};

export default memo(Item);
