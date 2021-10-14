import './App.scss';
import { getImageSrc } from './App.model';
import ImageLabel from './components/ImageLabel';
import React, { ChangeEvent, useState } from 'react';

type labelInfo = {
  id: string;
  style: {
    top: number;
    left: number;
  };
}

type imageState = string

export default function App() {
  const [imageSrc, setImageSrc] = useState<imageState>();
  const [labelsInfo, setLabelsInfo] = useState<labelInfo[]>([]);

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

  const onImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    const target = event.target as HTMLImageElement;
    const rect = target.getBoundingClientRect();
    const generateId = (): string => (Math.random() * 100 * Math.random() * 100).toFixed(3);

    setLabelsInfo((prevState) => {
      const newComponentConfig = {
        id: generateId(),
        style: {
          top: event.clientY - rect.top,
          left: event.clientX - rect.left
        }
      };

      return [...prevState, newComponentConfig];
    });
  };

  return (
    <div className='App'>
      {
        imageSrc &&
        <div className='image-wrapper'>
          <img
            src={imageSrc}
            alt='uploaded'
            onClick={onImageClick}
            onError={(error) => console.error(`Something went wrong: ${error}`)}
          />
          {
            !!labelsInfo.length &&
            labelsInfo.map((label) => <ImageLabel key={label.id} style={label.style}/>)
          }
        </div>
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