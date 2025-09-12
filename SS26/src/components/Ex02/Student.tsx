import { useParams } from "react-router-dom";

const Student = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <div>
      <h2>Chi tiết</h2>
      <p>Tên sinh viên là: <strong>{name}</strong></p>
    </div>
  );
};

export default Student;
