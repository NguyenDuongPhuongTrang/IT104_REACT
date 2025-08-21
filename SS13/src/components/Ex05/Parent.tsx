import { Component } from 'react';
import Children from './Children';

export default class Parent extends Component {
  state = {
    product: {
      id: 1,
      name: 'Bưởi ba roi',
      price: '12.000 đ',
      quantity: 6,
    },
  };

  render() {
    return (
      <div>
        <h2>Component Cha</h2>
        <Children product={this.state.product} />
      </div>
    );
  }
}