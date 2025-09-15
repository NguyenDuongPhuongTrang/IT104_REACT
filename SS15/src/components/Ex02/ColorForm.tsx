import { Component } from "react";

interface Color {
  color: string;
  submittedColor: string;
}

export default class ColorForm extends Component<object, Color> {
  constructor(props: Color) {
    super(props);
    this.state = {
      color: "#000000",
      submittedColor: "#000000",
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ color: e.target.value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({ submittedColor: this.state.color });
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <p>Color: {this.state.submittedColor}</p>
          <input
            type="color"
            value={this.state.color}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}