import React, { useState } from "react";
import { GoAlert } from "react-icons/go";
import Modal from "../Modal";
import { useUser } from "../../../contexts/UserProvider";

// TODO: fix typing for props add style for element failed to delete
const ListAction = ({ items, clearSelection, deleteSelectedData }) => {
  const { user } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleDelete = async () => {
    setIsModalOpen(false);
    deleteSelectedData(items);
    clearSelection();
  };
  const handleValidation = (value: string) => {
    // validate input matches "{owner}" using regex
    const regex = new RegExp(user, "i");
    if (!regex.test(value)) {
      return setIsValid(false);
    }
    return setIsValid(true);
  };

  return (
    <>
      <div className="flex justify-end w-full pr-4">
        <button
          onClick={() => setIsModalOpen(true)}
          type="button"
          disabled={!items?.length || false}
          className={`px-2 py-1 mt-2 text-xs text-white transition duration-100 border border-solid rounded-sm  ${
            !items?.length || false
              ? "bg-gray-300 border-gray-300 cursor-not-allowed"
              : "bg-red-500 border-red-500 hover:bg-red-300 hover:scale-105 hover:cursor-pointer focus:scale-105"
          }`}
        >
          <span className="flex items-center justify-center gap-1">
            Delete {!!items?.length && <p>({items.length})</p>}
          </span>
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
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
            onClick={handleDelete}
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
    </>
  );
};

export default ListAction;
