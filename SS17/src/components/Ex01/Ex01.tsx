import { useState } from 'react';

export default function ShowName() {
  const [name] = useState('Nguyễn Văn A');

  return (
    <div>
      <p>Họ và tên: {name}</p>
    </div>
  );
}