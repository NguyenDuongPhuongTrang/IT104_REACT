import React, { Component, type ChangeEvent } from "react";
type stateType = {
  name: string;
  email: string;
  age: string;
  error: string;
  submitted: boolean;
};
export default class UserForm extends Component<object, stateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      email: "",
      name: "",
      age: "",
      error: "",
      submitted: false,
    };
  }
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        this.setState({ name: value });
        break;
      case "email":
        this.setState({ email: value });
        break;
      case "age":
        this.setState({ age: value });
        break;
      default:
        break;
    }
  };
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, age } = this.state;
    if (!email.includes("@")) {
      this.setState({ error: " ⚠️ Email khong hop le", submitted: false });
      return;
    }
    if (Number(age) < 0) {
      this.setState({ error: " ⚠️ Tuổi không được âm", submitted: false });
      return;
    }
    this.setState({ error: "", submitted: true });
  };
  handleReset = () => {
    this.setState({
      email: "",
      name: "",
      age: "",
      error: "",
      submitted: false,
    });
  };
  render() {
    const { name, email, age, error, submitted } = this.state;
    return (
      <>
        <div className="formUser">
          <h2> 📑 Nhập thông tin người dùng</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="name" placeholder="Họ và Tên" value={name} onChange={this.handleChange} />
            <input type="text" name="email" placeholder="Email" value={email} onChange={this.handleChange} />
            <input type="text" name="age" placeholder="Tuổi" value={age} onChange={this.handleChange} />
            <span className="btn">
              <button type ="submit" >Gửi</button>
              <button type ="button" onClick={this.handleReset}>Xoá tất cả</button>
            </span>
          </form>
          {error && <p style={{color:"red", marginTop: "10px"}}>{error}</p>}
          {submitted && (
            <div>
              <h4>THông tin đăng nhập</h4>
              <p>Ho và Tên: {name}</p>
              <p>Email: {email}</p>
              <p>Tuổi: {age}</p>
            </div>
          )}
        </div>
      </>
    );
  }
}