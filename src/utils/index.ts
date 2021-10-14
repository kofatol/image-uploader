export const getImageSrc = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      resolve(reader.result);
    };

    reader.onerror = (error) => {
      reject(error);
    };
  });
};

export const generateId = (): string => (Math.random() * 100 * Math.random() * 100).toFixed(3);
