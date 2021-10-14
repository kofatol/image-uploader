import 'App.scss';
import { useImage } from 'hooks';
import { ImageContent, ImageUploader } from 'components';

export default function App() {
  const {imageSrc, onUploadImageClick, onFileInputClick} = useImage();

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