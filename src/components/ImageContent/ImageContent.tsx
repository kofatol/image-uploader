import './ImageContent.scss';
import { useLabelsInfo } from 'hooks';
import { ImageLabel } from 'components';

type ImageContentProps = { imageSrc: string }

export default function ImageContent({imageSrc}: ImageContentProps) {
  const {labelsInfo, onImageClick} = useLabelsInfo();

  return (
    <div className='ImageContent'>
      <img
        src={imageSrc}
        alt='uploaded'
        onClick={onImageClick}
        className={'ImageContent__image'}
        onError={(error) => console.error(`Something went wrong: ${error}`)}
      />
      {
        !!labelsInfo.length &&
        labelsInfo.map((label) => <ImageLabel key={label.id} style={label.style}/>)
      }
    </div>
  );
}