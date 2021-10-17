import { generateId } from 'utils';
import React, { useState } from 'react';
import { useImageDimensions } from './index';

type LabelInfo = {
  id: string;
  relativeX: number;
  relativeY: number;
}

const useLabelsInfo = () => {
  const [labelsInfo, setLabelsInfo] = useState<LabelInfo[]>([]);
  const {imgWrapperRef, imgHeight, imgWidth, imgX, imgY} = useImageDimensions();

  const onImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    const relativeX = (event.clientX - imgX) / imgWidth;
    const relativeY = (event.clientY - imgY) / imgHeight;

    setLabelsInfo((prevState) => {
      const newLabelInfo = {
        id: generateId(),
        relativeX,
        relativeY
      };

      return [...prevState, newLabelInfo];
    });
  };

  return {labelsInfo, onImageClick, imgWrapperRef, imgHeight, imgWidth};
};

export default useLabelsInfo;