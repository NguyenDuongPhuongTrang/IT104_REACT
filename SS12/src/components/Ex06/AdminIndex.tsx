import { Component } from "react";

export default class AdminIndex extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">Header</div>
        <div className="menu-main">
          <div className="menu">menu</div>
          <div className="main-footer">
            <div className="main">main</div>
            <div className="footer">footer</div>
          </div>
        </div>
      </div>
    );
  }
}