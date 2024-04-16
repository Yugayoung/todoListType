import React from 'react';

export default function AddTodo() {
  const [inputValue, setInputValue] = useState('');

  // 입력값을 업데이트하는 함수
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // 입력값을 투두 리스트에 추가하고 입력 필드를 초기화하는 함수
  const handleSubmit = () => {
    if (inputValue.trim() !== '') {
      onAdd(inputValue);
      setInputValue('');
    }
  };
  return (
    <div>
      <input
        type='text'
        value={inputValue}
        onChange={handleChange}
        placeholder='Enter your todo'
      />
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  );
}
