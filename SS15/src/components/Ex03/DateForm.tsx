import { Component } from "react";

interface Date {
  date: string;
  submittedDate: string;
}

export default class DateForm extends Component<{}, Date> {
  constructor(props: {}) {
    super(props);
    this.state = {
      date: '',
      submittedDate: ''
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ date: e.target.value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({ submittedDate: this.state.date });
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <p>Ngày sinh: {this.state.submittedDate}</p>
          <input
            type="date"
            value={this.state.date}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}