import { generateId } from 'utils';
import React, { useState } from 'react';

type labelInfo = {
  id: string;
  style: {
    top: number;
    left: number;
  };
}

const useLabelsInfo = () => {
  const [labelsInfo, setLabelsInfo] = useState<labelInfo[]>([]);

  const onImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    const target = event.target as HTMLImageElement;
    const rect = target.getBoundingClientRect();

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

  return {labelsInfo, onImageClick};
};

export default useLabelsInfo;