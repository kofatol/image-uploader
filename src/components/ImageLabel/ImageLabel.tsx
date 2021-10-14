import React from 'react';
import './ImageLabel.scss';
import { useInput } from 'hooks';

type ImageLabelProps = {
  style: {
    top: number;
    left: number;
  }
}

export default function ImageLabel({style}: ImageLabelProps) {
  const {inputValue, isTouched, isInputEmpty, onInputChange, onInputEnd} = useInput();

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