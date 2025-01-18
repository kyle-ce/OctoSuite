import { useCallback, useRef } from "react";

const useThrottle = (callback, delay) => {
  const lastCall = useRef(0);
  return useCallback(
    (...args) => {
      const now = Date.now();
      if (delay <= 0 || now - lastCall.current >= delay) {
        lastCall.current = now;
        callback(...args);
      }
    },
    [callback, delay]
  );
};
export default useThrottle;
