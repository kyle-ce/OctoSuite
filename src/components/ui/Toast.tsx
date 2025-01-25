import React, { useRef } from "react";

const Toast = ({ title, description }) => {
  const toastRef = useRef<HTMLDivElement>(null);
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
  const dissmiss = () => {
    console.log("show toast");
    if (toastRef.current) {
      toastRef.current.classList.toggle("translate-x-[0]");
      toastRef.current.classList.toggle("translate-x-[130%]");
      setTimeout(() => {
        if (toastRef.current) {
          toastRef.current.classList.toggle("translate-x-[0]");
          toastRef.current.classList.toggle("translate-x-[130%]");
        }
        // dissmiss();
      }, 1000);
    }
  };

  // if (!isAlert) return null;
  return (
    <div
      ref={toastRef}
      onClick={dissmiss}
      className="group flex items-center justify-center max-w-[500px] gap-2 border-white fixed bottom-0 right-[0] pl-2 px-4 py-2 m-8 text-white duration-500 bg-black/50 border border-solid rounded-md shadow-lg translate-x-[0] cursor-pointer"
    >
      <button className="absolute  opacity-0 duration-300 group-hover:opacity-100 ease-out top-0 right-0 w-[15px] h-[15px] m-[-5px] gray-500 border text-[8px] leading-tight bg-gray-500 rounded-full text-black/50 hover:scale-110">
        <CloseIcon />
      </button>
      <AlertIcon />
      <div className="flex flex-col items-start justify-start">
        <h1 className="p-0 text-base leading-tight">{title}</h1>
        <p className="text-xs text-gray-100 text-wrap">{description}</p>
      </div>
    </div>
  );
};

export default Toast;
