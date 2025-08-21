import  { Component } from 'react';
import Children_Comp from './Children_Comp';

export default class Parent_Comp extends Component {
  state = {
    name: 'Phương Trang',
  };

  render() {
    return (
      <div>
        <h2>Họ và tên bên component cha: {this.state.name}</h2>
        <Children_Comp name={this.state.name} />
      </div>
    );
  }
}