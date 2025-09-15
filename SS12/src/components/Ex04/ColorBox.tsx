import { Component } from "react";

export default class ColorBox extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Color Box</h1>
        <div className="box">
          <div className="box_1">Box</div>
          <div className="box_2">Box</div>
          <div className="box_3">Box</div>
        </div>
      </div>
    );
  }
}