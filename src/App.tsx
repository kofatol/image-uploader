import './App.scss';
import { getImageSrc } from './App.model';
import React, { ChangeEvent, useState } from 'react';
import ImageContent from './components/ImageContent';

type imageState = string

export default function App() {
  const [imageSrc, setImageSrc] = useState<imageState>();

  const onUploadImageClick = ({currentTarget}: React.MouseEvent<HTMLButtonElement>) => {
    const fileInput = currentTarget.nextElementSibling as HTMLInputElement;
    fileInput.click();
  };

  const onFileInputClick = async ({target}: ChangeEvent<HTMLInputElement>) => {
    const file: File = (target.files as FileList)[0];

    if (file !== undefined) {
      const imageSrc = await getImageSrc(file) as string;
      setImageSrc(imageSrc);
    }
  };

  return (
    <div className='App'>
      {
        imageSrc && <ImageContent imageSrc={imageSrc}/>
      }
      <div className='img-upload-group'>
        <button
          className='img-upload-group__button'
          onClick={onUploadImageClick}
        >
          Upload image
        </button>
        <input
          type='file'
          name='image'
          value=''
          accept='image/*'
          className='img-upload-group__input'
          onChange={onFileInputClick}
        />
      </div>
    </div>
  );
}