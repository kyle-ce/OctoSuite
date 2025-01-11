export const delay = async <T>(
  callback: () => Promise<T>,
  duration: number
): Promise<T> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(callback());
      } catch (error) {
        reject(error);
      }
    }, duration);
  });
};
