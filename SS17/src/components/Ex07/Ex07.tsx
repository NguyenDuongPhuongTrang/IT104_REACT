import React, { useState } from "react";

export default function Select() {
    const [select,setSelect]=useState("")
    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
        setSelect(e.target.value)
    }
  return (
    <>
      <select value={select} onChange={handleChange}>
        <option value="">-- Chọn thành phố --</option>
        <option value="Hà nội">Hà nội</option>
        <option value="Hà Nam">Hà Nam</option>
        <option value="Nam Định">Nam Định</option>
        <option value="Hải Phòng">Hải Phòng</option>
        <option value="Hải Dương">Hải Dương</option>
      </select>
      {select && <p>Thành Phố: {select}</p>}
    </>
  );
}