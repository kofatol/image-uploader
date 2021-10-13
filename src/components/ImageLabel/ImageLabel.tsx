import './ImageLabel.scss';
import React, { useState } from 'react';

type ImageLabelProps = {
  style: {
    top: number;
    left: number;
  }
}

export default function ImageLabel({style}: ImageLabelProps) {
  const [inputValue, setInputValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const [isInputEmpty, setIsInputEmpty] = useState(false);

  const onInputChange = ({target: {value}}: React.ChangeEvent<HTMLInputElement>): void => setInputValue(value);

  const onInputEnd = (): void => {
    setIsTouched(true);
    !inputValue && setIsInputEmpty(true);
  };

  return (
    isInputEmpty ? null :
      <div
        style={style}
        className='ImageLabel'
      >
        <input
          autoFocus
          maxLength={100}
          value={inputValue}
          disabled={isTouched}
          size={inputValue.length}
          onChange={onInputChange}
          onBlur={onInputEnd}
          className='ImageLabel__input'
        />
      </div>
  );
}