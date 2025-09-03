
import { useState } from "react";

export default function Ex08() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div
      style={{
        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        width: "400px",
        padding: "20px",
        margin: "20px auto",
        fontFamily: "Arial",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h1 style={{ textAlign: "left" }}>User Information Form</h1>

        <label style={{ display: "block", textAlign: "left", marginBottom: "5px" }}>
          Tên:
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "6px" }}
        />

        <label style={{ display: "block", textAlign: "left", marginBottom: "5px" }}>
          Email:
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", marginBottom: "20px", padding: "6px" }}
        />

        <div style={{ textAlign: "left", borderLeft: "6px solid blue", borderRadius:"10px", height:"150px"}}>
          <h2>Thông tin người dùng:</h2>
          <p>Tên: {name || "(Chưa nhập)"}</p>
          <p>Email: {email || "(Chưa nhập)"}</p>
        </div>
      </form>
    </div>
  );
}
