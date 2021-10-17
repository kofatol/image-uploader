import './ImageContent.scss';
import { useLabelsInfo } from 'hooks';
import { ImageLabel } from 'components';

type ImageContentProps = { imageSrc: string }

export default function ImageContent({imageSrc}: ImageContentProps) {
  const {labelsInfo, onImageClick, imgWrapperRef, imgHeight, imgWidth} = useLabelsInfo();

  return (
    <div className='ImageContent' ref={imgWrapperRef}>
      <img
        id='uploaded-image'
        src={imageSrc}
        alt='uploaded'
        onClick={onImageClick}
        className='ImageContent__image'
        onError={(error) => console.error(`Something went wrong: ${error}`)}
      />
      {
        !!labelsInfo.length &&
        labelsInfo.map((label) => {
          const labelStyle = {
            left: label.relativeX * imgWidth,
            top: label.relativeY * imgHeight
          };

          return <ImageLabel key={label.id} style={labelStyle}/>;
        })
      }
    </div>
  );
}