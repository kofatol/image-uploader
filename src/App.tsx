import 'App.scss';
import { useState } from 'react';
import { getImageSrc } from 'App.model';
import ImageContent from 'components/ImageContent';
import ImageUploader from 'components/ImageUploader';
import { onFileInputClickEvent, onUploadImageClickEvent } from 'model/types';

export default function App() {
  const [imageSrc, setImageSrc] = useState("");

  const onUploadImageClick = ({currentTarget}: onUploadImageClickEvent) => {
    const fileInput = currentTarget.nextElementSibling as HTMLInputElement;
    fileInput.click();
  };

  const onFileInputClick = async ({target}: onFileInputClickEvent) => {
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
      {
        !imageSrc &&
        <ImageUploader
          onFileInputClick={onFileInputClick}
          onUploadImageClick={onUploadImageClick}
        />
      }
    </div>
  );
}