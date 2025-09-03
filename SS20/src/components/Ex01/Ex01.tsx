import React, { useState } from "react";

export default function Ex01() {
  const [input, setInput] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Kiểm tra độ dài chuỗi nhập vào</h1>
      <input
        type="text"
        placeholder="Nhập vào đây"
        style={{ width: "450px", padding: "8px", marginBottom: "10px" }}
        value={input}
        onChange={handleChange}
      />
      {input.length > 5 && (
        <p style={{ color: "red" }}>Chuỗi nhập vào quá 5 ký tự!</p>
      )}
    </div>
  );
}