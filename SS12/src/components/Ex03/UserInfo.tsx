import { Component } from "react";

class UserInfo extends Component{
    user = {
    name: "Nguyễn Văn A",
    gender: "Nam",
    dob: "06/03/2024",
    email: "nva@gmail.com",
    address: "Thanh Xuân, Hà Nội",
  };

  render() {
    const { name, gender, dob, email, address } = this.user;
    return (
      <div>
        <h1>Thông tin cá nhân</h1>
        <ul>
          <li>
            Họ và tên: <b>{name}</b>
          </li>
          <li>
            Giới tính: <b>{gender}</b>
          </li>
          <li>
            Ngày sinh: <b>{dob}</b>
          </li>
          <li>
            Email: <b>{email}</b>
          </li>
          <li>
            Địa chỉ: <b>{address}</b>
          </li>
        </ul>
      </div>
    );
}
}

export default UserInfo