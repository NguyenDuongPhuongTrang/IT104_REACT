import { useState } from 'react';

export default function ChangeColor() {
  const [color, setColor] = useState<'black' | 'red'>('black');

  const handleChangeColor = () => {
    setColor('red');
  };

  return (
    <div>
      <h2 style={{ color }}>Phuongtrang</h2>
      <button onClick={handleChangeColor}>Thay đổi màu</button>
    </div>
  );
}