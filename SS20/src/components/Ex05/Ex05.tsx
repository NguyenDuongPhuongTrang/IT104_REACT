import { useEffect, useState } from "react";

export default function Ex05() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
      console.log("Timer đã được dọn dẹp");
    };
  }, []);
  return (
    <div>
      <h1>Bộ đếm thời gian</h1>
      <p>Giá trị: {count}</p>
    </div>
  );
}