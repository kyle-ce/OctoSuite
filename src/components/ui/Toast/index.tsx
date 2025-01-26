import React, { useEffect, useRef, useState } from "react";
import { IToast } from "../../../contexts/ToastProvider";

const Toast = ({ title, description, variant = "info", onClose }: IToast) => {
  const [show, setShow] = useState(false);
  const [translateX, setTranslateX] = useState("500");

  const timerRefRemove = useRef<NodeJS.Timeout | null>(null);
  const timerRefShow = useRef<NodeJS.Timeout | null>(null);
  const toastRef = useRef<HTMLDivElement | null>(null);
  const CloseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      className="text-base text-bold"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
  const AlertIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-8 "
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
        clipRule="evenodd"
      />
    </svg>
  );

  useEffect(() => {
    timerRefShow.current = setTimeout(() => {
      setShow(true);
      timerRefRemove.current = setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 10);
    if (toastRef.current) {
      const boundingRect = toastRef.current.getBoundingClientRect();
      setTranslateX(
        Math.ceil(boundingRect.width + boundingRect.height).toString()
      );
    }
    return () => {
      if (timerRefShow.current) {
        clearTimeout(timerRefShow.current);
      }
      if (timerRefRemove.current) {
        clearTimeout(timerRefRemove.current);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={toastRef}
        style={{
          transform: show ? "translateX(0)" : `translateX(${translateX}px)`,
        }}
        id="toast-notification"
        className={`group mb-4 mr-4 flex items-center justify-center max-w-[500px] gap-2 border-white  pl-2 px-4 py-2  text-white duration-300 bg-black/50 border border-solid rounded-md shadow-lg cursor-pointer
        `}
      >
        <div
          id="timer"
          className={`absolute bottom-0 left-0 border-b-[4px] border-white transition-all ease-linear duration-[3s] ${
            show ? "w-0" : "w-full"
          }`}
        />
        <button
          onClick={onClose}
          type="button"
          className="absolute opacity-0 duration-300 group-hover:opacity-100 ease-out top-0 right-0 w-[15px] h-[15px] m-[-5px] gray-500 border text-[8px] leading-tight bg-gray-500 rounded-full text-black/50 hover:scale-110"
        >
          <CloseIcon />
        </button>
        <AlertIcon />
        <div className="flex flex-col items-start justify-start">
          <h1 className="p-0 text-base leading-tight">{title}</h1>
          <p className="text-xs text-gray-100 text-wrap">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Toast;
