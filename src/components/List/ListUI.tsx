import React from "react";
import { GoPersonFill, GoDotFill, GoSync, GoAlert } from "react-icons/go";
import { data } from "react-router";
import Modal from "../Modal";
import Item from "./Item";

const ListUI = ({
  user,
  data,
  handleSelectAll,
  throttleRefresh,
  selectedItems,
  handleToggleSelect,
  setIsModalOpen,
  isDeleting,
  isModalOpen,
  isValid,
  handleDelete,
  handleValidation,
}) => {
  return (
    <div className="container w-full p-3 px-2 mx-auto" id="repos">
      <h1 className="text-base font-semibold "> Active Repositories</h1>
      <div className="flex items-center justify-between pr-2 mt-2">
        <div className="flex items-center gap-4 ">
          <input
            id="selectall"
            type="checkbox"
            onChange={handleSelectAll}
          ></input>
          <p className="flex items-center gap-1 pr-4 text-xs text-black/50">
            <GoPersonFill className="text-black" />
            {user} <GoDotFill className="text-black" /> {data.length}{" "}
            repositories
          </p>
        </div>
        <button
          onClick={throttleRefresh}
          type="button"
          className="p-2 text-xs text-white transition duration-100 border-solid rounded-full hover:bg-gray-300 hover:scale-105 hover:cursor-pointer focus:scale-105"
        >
          <GoSync className="text-black" />
        </button>
      </div>

      <div className="max-h-screen pr-4 overflow-auto ">
        {data.map((repo, i) => (
          <Item
            key={i}
            checked={selectedItems.some((item) => item.value === repo.value)}
            isLoading={
              selectedItems.find(({ value }) => value === repo.value) &&
              isDeleting
            }
            id={i}
            value={repo.value}
            onChange={({ target }) =>
              handleToggleSelect({ id: i, value: target.value })
            }
          />
        ))}
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        type="button"
        disabled={!selectedItems.length}
        className={`px-2 py-1 mt-2 text-xs text-white transition duration-100 border border-solid rounded-sm ${
          !selectedItems.length
            ? "bg-gray-300 border-gray-300 cursor-not-allowed"
            : "bg-red-500 border-red-500 hover:bg-red-300 hover:scale-105 hover:cursor-pointer focus:scale-105"
        }`}
      >
        <span className="flex items-center justify-center gap-1">
          Delete {!!selectedItems.length && <p>({selectedItems.length})</p>}
        </span>
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h1 className="mb-2 text-base font-semibold text-center text-gray-800">
          Delete Selected Repositories ({selectedItems.length})
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
    </div>
  );
};

export default ListUI;
