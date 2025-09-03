import { useEffect, useRef, useState } from "react";
export default function Ex06() {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);
  return (
    <div>
        <div style={{textAlign: "center"}}>
      <h1>Ứng dụng React với Modal và Focus Input</h1>
      <button style={{ backgroundColor: "green", color: "white" }} onClick={() => setIsOpen(true)}>Mở Modal</button>
      </div>
      {isOpen && (
        <>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            onClick={() => setIsOpen(false)} 
          />
          <div
            style={{
              position: "fixed",
              top: "30%",
              left: "50%",
              transform: "translate(-50%, -30%)",
              backgroundColor: "white",
              padding: "20px",
              border: "1px solid #ccc",
              boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            }}
          >
            <h2>Đăng nhập</h2>
            <input
              type="text"
              placeholder="Nhập tên đăng nhập"
              ref={inputRef}
            />
            <br />
            <button
              onClick={() => setIsOpen(false)}
              style={{
                marginTop: "10px",
                backgroundColor: "red",
                color: "white",
              }}
            >
              Đóng Modal
            </button>
          </div>
        </>
      )}
    </div>
  );
}