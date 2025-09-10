import { Link } from "react-router-dom";

type User = {
  id: number;
  userName: string;
  email: string;
  address: string;
};

export default function ListUser() {
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
  return (
    <>
      {users.map((user) => (
        <div key={user.id} style={{ border: "1px solid #cd7676ff", padding: "10px", margin: "10px" }}>
          <ul style={{ listStyleType: "none" }}>
            <li>Id:{user.id}</li>
            <li>UserName:{user.userName}</li>
            <li>Email:{user.email}</li>
            <li>Address:{user.address}</li>
          </ul>
          <Link to={`/user/${user.id}`}>
            <button>Xem chi tiết</button>
          </Link>
        </div>
      ))}
    </>
  );
}