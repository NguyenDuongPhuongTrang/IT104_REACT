import { useState } from "react";
import {  useSearchParams } from "react-router-dom";

const Student = () => {
  const [keyword, setKeyword] = useState("");
  const [, setSearchParams] = useSearchParams();


  const handleSearch = () => {
    setSearchParams({studentName: keyword})
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Nhập từ khóa tìm kiếm"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />
      <button
        onClick={handleSearch}
        style={{
          marginLeft: "10px",
          padding: "8px 16px",
          backgroundColor: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Tìm kiếm
      </button>


    </div>
  );
};

export default Student;
