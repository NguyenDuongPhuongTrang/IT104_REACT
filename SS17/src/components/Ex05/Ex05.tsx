import React, { useState } from 'react';

export default function Form() {
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nhập nội dung"
        value={text}
        onChange={handleChange}
      />
      <p>{text}</p>
    </div>
  );
}