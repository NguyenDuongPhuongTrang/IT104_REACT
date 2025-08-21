import { Component } from 'react';

interface Product {
  id: number;
  name: string;
  price: string;
  quantity: number;
}

interface Props {
  product: Product;
}

export default class Children extends Component<Props> {
  render() {
    const { id, name, price, quantity } = this.props.product;

    return (
      <div>
        <h3>Dữ liệu trong component con</h3>
        <p>Id: {id}</p>
        <p>Product name: {name}</p>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
      </div>
    );
  }
}