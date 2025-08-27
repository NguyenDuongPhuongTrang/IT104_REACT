import React, { useState } from 'react';

export default function CounText() {
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h2>Nhập nội dung:</h2>
      <textarea
        value={text}
        onChange={handleChange}
        rows={4}
        cols={40}
      />
      <p>Số ký tự: {text.length}</p>
    </div>
  );
}