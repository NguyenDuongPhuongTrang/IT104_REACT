import { useParams } from "react-router-dom";

type User = {
  id: number;
  userName: string;
  email: string;
  address: string;
};
const users: User[] = [
  {
    id: 1,
    userName: "Nguyễn Văn A",
    email: "nva@gmail.com",
    address: "Hà Nội",
  },
  {
    id: 2,
    userName: "Nguyễn Văn B",
    email: "nvb@gmail.com",
    address: "Hà Nam",
  },
  {
    id: 3,
    userName: "Nguyễn Văn C",
    email: "nvc@gmail.com",
    address: "Ninh Bình",
  },
];
export default function UserDetail() {
  const { id } = useParams<{ id: string }>();
  const user = users.find((u) => u.id === Number(id));
  if (!user) return <h2>Không tìm thấy user</h2>;
  return (
    <>
      <h2>Thông tin chi tiết</h2>
      <div key={user.id} style={{ border: "1px solid #cd7676ff", padding: "10px", margin: "10px" }}>
        <ul style={{ listStyleType: "none" }}>
          <li>Id:{user.id}</li>
          <li>UserName:{user.userName}</li>
          <li>Email:{user.email}</li>
          <li>Address:{user.address}</li>
        </ul>
      </div>
    </>
  );
}