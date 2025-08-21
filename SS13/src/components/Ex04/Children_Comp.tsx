import  { Component } from 'react';

interface Props {
  name: string;
}

export default class Children_Comp extends Component<Props> {
  render() {
    return (
      <div>
        <h2>Họ và tên bên component con: {this.props.name}</h2>
      </div>
    );
  }
}