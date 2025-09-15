import React, { useReducer } from 'react';

type Gender = 'Nam' | 'Nữ' | 'Khác';

type Action = {
  type: 'SET_GENDER';
  payload: Gender;
};
const reducer = (state: Gender, action: Action): Gender => {
  switch (action.type) {
    case 'SET_GENDER':
      return action.payload;
    default:
      return state;
  }
};
export default function InputRadio() {
  const [gender, dispatch] = useReducer(reducer, 'Nam');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_GENDER', payload: e.target.value as Gender });
  };

  return (
    <div style={{ padding: '20px' }}>
      <label>
        <input
          type="radio"
          name="gender"
          value="Nam"
          checked={gender === 'Nam'}
          onChange={handleChange}
        />
        Nam
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="Nữ"
          checked={gender === 'Nữ'}
          onChange={handleChange}
        />
        Nữ
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="Khác"
          checked={gender === 'Khác'}
          onChange={handleChange}
        />
        Khác
      </label>

      <p style={{ marginTop: '10px' }}>
        Selected gender: <strong>{gender}</strong>
      </p>
    </div>
  );
}