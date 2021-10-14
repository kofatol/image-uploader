import React, { useState } from 'react';

const useInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const [isInputEmpty, setIsInputEmpty] = useState(false);

  const onInputChange = ({target: {value}}: React.ChangeEvent<HTMLInputElement>): void => setInputValue(value);

  const onInputEnd = (): void => {
    setIsTouched(true);
    !inputValue && setIsInputEmpty(true);
  };

  return {inputValue, isTouched, isInputEmpty, onInputChange, onInputEnd};
};

export default useInput;