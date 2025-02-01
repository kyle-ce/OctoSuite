import React from "react";
import { GoAlert } from "react-icons/go";
import Modal from "./ui/Modal";

const DeleteRepoModal = ({
  isOpen,
  onClose,
  handleValidation,
  isValid,
  handleSubmit,
  items,
  user,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h1 className="mb-2 text-base font-semibold text-center text-gray-800">
        Delete Selected Repositories ({items?.length})
      </h1>
      <div className="flex flex-col gap-2 ">
        <p className="flex items-center justify-center gap-1 text-sm text-center text-gray-600 bg-red-100 rounded-md">
          <GoAlert className="text-xs text-red-500 " />
          This action cannot be undone
        </p>
        {/* <p className="flex items-center justify-center gap-2 p-3 text-xs font-semibold text-center text-orange-700 capitalize bg-yellow-100 border border-yellow-400 rounded-full shadow-sm ">
<GoAlert className="text-xs text-orange-700" />
This action cannot be undone
</p> */}
        <input
          onChange={(e) => handleValidation(e.target.value)}
          className="w-full p-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder={user}
        />
      </div>
      {!isValid && (
        <p className="text-xs text-red-500 transition duration-100 ease-in-out ">
          Please enter your username to continue
        </p>
      )}

      <div className="flex justify-end gap-4 mt-6">
        <button
          disabled={!isValid}
          onClick={handleSubmit}
          className={`px-6 py-3 text-xs font-semibold rounded-md transition duration-200 ${
            !isValid
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "text-white bg-red-500 hover:bg-red-400 focus:ring-2 focus:ring-red-500"
          }`}
        >
          Delete
        </button>
      </div>
    </Modal>
  );
};

export default DeleteRepoModal;
