import { useState } from 'react';

export default function ProductInfo() {
  const [product] = useState({
    id: 1,
    name: 'Coca cola',
    price: 1000,
    quantity: 10,
  });

  return (
    <div>
      <h2>Thông tin sản phẩm</h2>
      <p><strong>Id:</strong> {product.id}</p>
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Price:</strong> {product.price} $</p>
      <p><strong>Quantity:</strong> {product.quantity}</p>
    </div>
  );
}