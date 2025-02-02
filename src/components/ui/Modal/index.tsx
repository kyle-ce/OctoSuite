import clsx from "clsx";
import React, { useState } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  // if (!isOpen) return null;
  return (
    <div
      className={clsx(
        "fixed inset-0 flex items-center justify-center transition-opacity duration-300 bg-black/50 backdrop-blur-md",
        {
          "opacity-100 scale-100": isOpen,
          "opacity-0 scale-0": !isOpen,
        }
      )}
      onClick={onClose}
    >
      <div
        className={clsx(
          "relative w-full max-w-lg p-8 bg-white rounded shadow-lg transition-transform duration-300",
          {
            "scale-100": isOpen,
            "scale-0": !isOpen,
          }
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 rounded-full hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
