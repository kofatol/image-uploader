import "./ImageContent.scss";
import React, { useState } from 'react';
import { ImageLabel } from 'components';

type labelInfo = {
  id: string;
  style: {
    top: number;
    left: number;
  };
}

type ImageContentProps = { imageSrc: string }

export default function ImageContent({imageSrc}: ImageContentProps) {
  const [labelsInfo, setLabelsInfo] = useState<labelInfo[]>([]);

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
  )
}