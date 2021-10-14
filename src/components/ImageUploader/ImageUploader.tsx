import './ImageUploader.scss';
import { onFileInputClickEvent, onUploadImageClickEvent } from 'model/types';

type ImageUploaderProps = {
  onFileInputClick(e: onFileInputClickEvent): void;
  onUploadImageClick(e: onUploadImageClickEvent): void;
}

export default function ImageUploader({onUploadImageClick, onFileInputClick}: ImageUploaderProps) {
  return (
    <div className='ImageUploader'>
      <h3 className='ImageUploader__text'>To upload an image please click on the button below</h3>
      <button
        onClick={onUploadImageClick}
        className='ImageUploader__button'
      >
        Upload image
      </button>
      <input
        value=''
        type='file'
        name='image'
        accept='image/*'
        onChange={onFileInputClick}
        className='ImageUploader__input'
      />
    </div>
  );
}