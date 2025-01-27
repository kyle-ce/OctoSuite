import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

export interface IToast {
  id?: string;
  title: string;
  description: string;
  variant?: "alert" | "error" | "info" | "success";
  show?: boolean;
  duration?: number;
  onClose?: () => void;
}

const Toast = ({ title, description, variant = "info", onClose }: IToast) => {
  const [show, setShow] = useState(false);
  //large number to prevent it from peeking on realistic large screens
  const [translateX, setTranslateX] = useState("9999");

  const timerRefRemove = useRef<NodeJS.Timeout | null>(null);
  const timerRefAllowRender = useRef<NodeJS.Timeout | null>(null);
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
      className={`size-8`}
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
  const SuccessIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className=" size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
  const ErrorIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
      />
    </svg>
  );
  const InfoIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
      />
    </svg>
  );

  const handleClick = (e) => {
    if (timerRefRemove.current) {
      clearTimeout(timerRefRemove.current);
      console.log(e.target);
    }
  };

  useEffect(() => {
    timerRefAllowRender.current = setTimeout(() => {
      setShow(true);
      timerRefRemove.current = setTimeout(() => {
        setShow(false);
        // wait 3s before translating off screen
      }, 3000);
      // allow layout to render off screen by delaying set true by 10ms
    }, 10);
    if (toastRef.current) {
      const boundingRect = toastRef.current.getBoundingClientRect();
      setTranslateX(
        Math.ceil(boundingRect.width + boundingRect.height).toString()
      );
    }
    return () => {
      if (timerRefAllowRender.current) {
        clearTimeout(timerRefAllowRender.current);
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
        onClick={handleClick}
        style={{
          transform: show ? "translateX(0)" : `translateX(${translateX}px)`,
        }}
        id="toast-notification"
        className={clsx(
          "group mb-4 mr-4 border flex items-center justify-center max-w-[500px] gap-2  pl-2 px-4 py-2  text-white duration-300 bg-black/50 border-solid rounded-md shadow-lg cursor-pointer",
          {
            // varient classes here
          }
        )}
      >
        <div
          id="timer"
          className={clsx(
            "absolute bottom-0 left-0 border-b-[4px] transition-all ease-linear duration-[3s]",
            {
              "w-0": show,
              "w-full": !show,
              "border-green-300": variant === "success",
              "border-blue-500": variant === "info",
              "border-yellow-300": variant === "alert",
              "border-red-500": variant === "error",
            }
          )}
        />
        <button
          onClick={onClose}
          type="button"
          className="absolute opacity-0 duration-300 group-hover:opacity-100 ease-out top-0 right-0 w-[15px] h-[15px] m-[-5px] gray-500 border text-[8px] leading-tight bg-gray-500 rounded-full text-black/50 hover:scale-110"
        >
          <CloseIcon />
        </button>
        {variant === "alert" && <AlertIcon />}
        {variant === "info" && <InfoIcon />}
        {variant === "error" && <ErrorIcon />}
        {variant === "success" && <SuccessIcon />}
        <div className="flex flex-col items-start justify-start">
          <h1 className="p-0 text-base leading-tight">{title}</h1>
          <p className="text-xs text-gray-100 text-wrap">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Toast;
