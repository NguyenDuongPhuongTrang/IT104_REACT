import  { useState } from "react";

export default function Ex07() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>Số đếm: {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>Tăng</button>
        <button onClick={() => setCount((count) => count - 1)}>Giảm</button>
      </div>
    </div>
  );
}