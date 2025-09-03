import { useEffect, useState } from "react";

export default function Ex04() {
  const [name, setName] = useState("");

  useEffect(() => {
    if(name){
        document.title = name;
    }else{ document.title = `Chào mừng bạn đến với trang của ${name}`;}
  }, [name]);

  return (
    <div>
      <h1>Nhập tên người dùng</h1>
      <input
        type="text"
        placeholder="Nhập tên"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Tieu de thay doi khi ban nhao ten</p>
    </div>
  );
}