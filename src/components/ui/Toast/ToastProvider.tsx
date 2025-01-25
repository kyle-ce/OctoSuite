import React, { createContext, useContext, useRef, useState } from "react";

interface IToast {
  id: number;
  title: string;
  description: string;
}

interface IToastContext {
  toasts: IToast[];
  setToasts: (prev: IToast[]) => void;
  translateX: string;
  toggleTranslateX: () => void;
  toastRef: React.MutableRefObject<HTMLDivElement | null>;
}

const ToastContext = createContext<IToastContext | undefined>(undefined);

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState<IToast[] | []>([]);
  const [translateX, setTranslateX] = useState("");

  const toastRef = useRef<HTMLDivElement | null>(null);

  const toggleTranslateX = () => {
    if (toastRef.current) {
      console.log("TranslateX", translateX);
      const boundingRect = toastRef.current.getBoundingClientRect();
      setTranslateX(
        Math.ceil(boundingRect.width + boundingRect.height).toString()
      );
      console.log("size", boundingRect, translateX);
      toastRef.current.classList.toggle(`translate-x-[${translateX}px]`);
      toastRef.current.classList.toggle("after:w-full");
      toastRef.current.classList.toggle("after:w-0");
    }
  };
  return (
    <ToastContext.Provider
      value={{ toasts, setToasts, toggleTranslateX, translateX, toastRef }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const toast = useContext(ToastContext);
  if (!toast) throw new Error("Must be inside ToastProvider to call hook");
  return toast;
};

export default ToastProvider;
