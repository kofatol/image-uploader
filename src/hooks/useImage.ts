import { useState } from 'react';
import { getImageSrc } from 'utils';
import { onFileInputClickEvent, onUploadImageClickEvent } from 'model/types';

const useImage = () => {
  const [imageSrc, setImageSrc] = useState('');

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

  return {imageSrc, onUploadImageClick, onFileInputClick};
};

export default useImage;