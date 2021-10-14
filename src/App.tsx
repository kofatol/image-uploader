import 'App.scss';
import ImageContent from 'components/ImageContent';
import ImageUploader from 'components/ImageUploader';
import useImageHandler from 'hooks/useImageHandler';

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