import './ImageUploader.scss';
import { onFileInputClickEvent, onUploadImageClickEvent } from 'model/types';

type ImageUploaderProps = {
  onUploadImageClick(e: onUploadImageClickEvent): void;
  onFileInputClick(e: onFileInputClickEvent): void;
}

export default function ImageUploader({onUploadImageClick, onFileInputClick}: ImageUploaderProps) {
  return (
    <div className='ImageUploader'>
      <h3 className='ImageUploader__text'>To upload an image please click on the button below</h3>
      <button
        className='ImageUploader__button'
        onClick={onUploadImageClick}
      >
        Upload image
      </button>
      <input
        type='file'
        name='image'
        value=''
        accept='image/*'
        className='ImageUploader__input'
        onChange={onFileInputClick}
      />
    </div>
  );
}