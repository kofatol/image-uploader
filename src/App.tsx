import 'App.scss';
import { useImageHandler } from 'hooks';
import { ImageContent, ImageUploader } from 'components';

export default function App() {
  const {imageSrc, onUploadImageClick, onFileInputClick} = useImageHandler();

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