import { useCallback, useEffect, useRef, useState } from 'react';

const useImageDimensions = () => {
  const imgWrapperRef = useRef<HTMLDivElement>(null);
  const [imageDimensions, setImageDimensions] = useState({height: 0, width: 0, y: 0, x: 0});

  const getImageDimensions = useCallback(() => {
    const target = imgWrapperRef.current as HTMLDivElement;
    const {height, width, x, y} = target.getBoundingClientRect();
    return {height, width, x, y};
  }, []);

  const updateImageDimensions = useCallback(() => {
    const imgDimensions = getImageDimensions();
    setImageDimensions(imgDimensions);
  }, [getImageDimensions]);

  useEffect(() => {
    updateImageDimensions();
    window.addEventListener('resize', updateImageDimensions);

    return () => window.removeEventListener('resize', updateImageDimensions);
  }, [window.innerWidth, window.innerHeight, updateImageDimensions]);

  return {
    imgWrapperRef,
    imgX: imageDimensions.x,
    imgY: imageDimensions.y,
    imgWidth: imageDimensions.width,
    imgHeight: imageDimensions.height
  };
};

export default useImageDimensions;