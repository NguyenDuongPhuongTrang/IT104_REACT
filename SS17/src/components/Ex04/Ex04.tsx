import { useState } from 'react';

export default function Toggle() {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isVisible ? 'Ẩn' : 'Hiện'}
      </button>

      {isVisible && <h2>Phuongtrang xinhh</h2>}
    </div>
  );
}