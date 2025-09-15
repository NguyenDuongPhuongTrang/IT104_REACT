import { useSearchParams } from "react-router-dom";

const Student = () => {
  const [searchParams] = useSearchParams();

  const studentName = searchParams.get("studentName");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Thông tin Student</h2>
      {studentName ? (
        <p>Kết quả mong đợi: <b>{studentName}</b></p>
      ) : (
        <p>Không có studentName trong URL</p>
      )}
    </div>
  );
};

export default Student;
