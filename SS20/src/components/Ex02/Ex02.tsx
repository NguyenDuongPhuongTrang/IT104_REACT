import { useState } from "react";
export default function Ex02() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Thong tin nguoi dung</h1>
        <input
          type="text"
          placeholder="Nhap ten"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Nhap email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button type="submit">Gui</button>
      </form>
      {submitted && (
        <div>
          <p>Ten: {name}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  );
}