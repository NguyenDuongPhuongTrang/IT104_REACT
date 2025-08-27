import { useState } from "react";

export default function CheckBox() {
    const hobbies = ["Đi chơi", "Code", "Bơi lội", "Nhảy dây"];
    const [selected,setSelected]= useState<string[]>([])
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const value = e.target.value;
        const checked = e.target.checked;
        if(checked){
            setSelected([...selected,value])
        }else{
            setSelected(selected.filter(item=>item!==value))
        }
    }
  return (
    <>
    <label>Sở thích: </label>
    <br />
    {hobbies.map((hobby,index)=>(
        <div key={index}>
          <input type="checkbox" value={hobby} onChange={handleChange} checked={selected.includes(hobby)} />  
          <span>{hobby}</span>
        </div>
    ))}
    <p>Các sở thích đã chọn: {selected.join(", ")}</p>
    </>
  )
}