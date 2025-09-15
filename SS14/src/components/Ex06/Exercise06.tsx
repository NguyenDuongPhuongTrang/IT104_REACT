import React from "react";

interface State {
  gender: string;
  submitted: boolean;
}

export default class Exercise06 extends React.Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      gender: "",
      submitted: false,
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ gender: e.target.value, submitted: false });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.setState({ submitted: true });
  };

  render() {
    const { gender, submitted } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div style={{display: "flex", gap: "5px"}}>Giới tính: {submitted && <div>{gender || "Chưa chọn"}</div>}
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="Nam"
                checked={gender === "Nam"}
                onChange={this.handleChange}
              />
              Nam
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="Nữ"
                checked={gender === "Nữ"}
                onChange={this.handleChange}
              />
              Nữ
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="Khác"
                checked={gender === "Khác"}
                onChange={this.handleChange}
              />
              Khác
            </label>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}