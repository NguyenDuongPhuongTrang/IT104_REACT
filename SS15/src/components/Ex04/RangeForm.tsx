import { Component } from "react";

interface Range {
  range: string;
  submittedRange: string;
}

export default class RangeForm extends Component<{}, Range> {
  constructor(props: {}) {
    super(props);
    this.state = {
      range: '',
      submittedRange: ''
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ range: e.target.value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({ submittedRange: this.state.range });
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <p>Tiến độ: {this.state.submittedRange}%</p>
          <input
            type="range"
            value={this.state.range}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}