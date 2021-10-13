import './App.scss';
import { getImageSrc } from './App.model';
import React, { ChangeEvent, useState } from 'react';

function App() {
  const initState = {name: '', src: ''};
  const [imageState, setImageState] = useState(initState);

  const onUploadImageClick = ({currentTarget}: React.MouseEvent<HTMLButtonElement>) => {
    const fileInput = currentTarget.nextElementSibling as HTMLInputElement;
    fileInput.click();
  };

  const onFileInputClick = async ({target}: ChangeEvent<HTMLInputElement>) => {
    const file: File = (target.files as FileList)[0];

    if (file !== undefined) {
      const imageSrc = await getImageSrc(file) as string;

      setImageState({
        name: file.name,
        src: imageSrc
      });
    }
  };

  return (
    <div className='App'>
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

export default App;
