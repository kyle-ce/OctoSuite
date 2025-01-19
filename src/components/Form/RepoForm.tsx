import React, { useEffect, useRef, useState } from "react";
import Input from "./Input";
import { deleteRepo } from "../../api/repo";
import { GoPersonFill, GoDotFill } from "react-icons/go";

import Loading from "../loading";
import { useUser } from "../../utils/UserProvider";
import Modal from "../Modal";
import { GoAlert } from "react-icons/go";

interface IErrorDetails {
  repo: string;
  error: string;
}

const deleteSelectedRepos = async (
  items: IRepoItem[],
  auth: string,
  user: string
): Promise<{ success: string[]; errors: IErrorDetails[] }> => {
  const success: string[] = [];
  const errors: IErrorDetails[] = [];

  const promises = items.map(({ value }) => deleteRepo(auth, user, value));
  const settledPromises = await Promise.allSettled(promises);

  settledPromises.forEach((result, i) => {
    if (result.status === "fulfilled") {
      success.push(items[i].value);
    } else if (result.status === "rejected" && result.reason instanceof Error) {
      errors.push({ repo: items[i].value, error: result.reason.message });
    }
  });

  return { success, errors };
};

const RepoForm = () => {
  const {
    user,
    token: auth,
    isLoggingin,
    isLoading,
    availableRepos,
    setAvailableRepos,
    refreshRepositories,
  } = useUser();
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedItems, setSelectedItems] = useState<IRepoItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleOnChange = (item: IRepoItem) => {
    setSelectedItems((prev) =>
      prev.find(({ value }) => value === item.value)
        ? // unchecked
          prev.filter(({ value }) => value !== item.value)
        : // checked
          [...prev, item]
    );
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      // Select all repositories
      setSelectedItems(availableRepos.map(({ value }, id) => ({ id, value })));
    } else {
      // Deselect all repositories
      setSelectedItems([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsDeleting(true);
    closeModal();
    // delete selected repos
    const { success, errors } = await deleteSelectedRepos(
      selectedItems,
      auth,
      user
    );
    // display success/error messages
    if (success.length) {
      alert(`Successfully deleted:\n${success.join("\n")}`);
    }
    if (errors.length) {
      alert(
        `Failed to delete:\n${errors
          .map((err) => `${err.repo}: ${err.error}`)
          .join("\n")}`
      );
    }
    // Remove deleted repos from available repos
    setAvailableRepos((prev: IRepoItem[]) =>
      prev.filter(({ value }) => !success.includes(value))
    );
    // Reset all selected items
    setSelectedItems([]);
    setIsDeleting(false);
  };

  const handleValidation = ({ target }) => {
    // validate input matches "{owner}" using regex
    const regex = new RegExp(user, "i");
    console.log(target.value, !regex.test(target.value));
    if (!regex.test(target.value)) {
      return setIsValid(false);
    }
    return setIsValid(true);
  };

  useEffect(() => {
    // update repositories when user changes
    if (user) refreshRepositories(auth);
  }, [user, isLoggingin]);

  if (!user && !isLoggingin) {
    // do not show component if unauthenticated
    return;
  }
  return (
    <Loading isLoading={isLoading || isLoggingin}>
      <form className="container w-full p-3 px-2 mx-auto" id="repos">
        <h1 className="text-base font-semibold "> Active Repositories</h1>
        <p className="mb-2 text-xs text-black/50">
          Select available repositories to delete forever
        </p>
        <div className="flex justify-between pr-4 text-xs text-black/50">
          <p className="flex items-center gap-1 ">
            <GoPersonFill className="text-black" />
            {user || "Authenticate yourself"}{" "}
            <GoDotFill className="text-black" /> {availableRepos.length}{" "}
            repositories
          </p>
          <span className="flex gap-1">
            <input
              id="selectall"
              type="checkbox"
              onChange={handleSelectAll}
            ></input>
          </span>
        </div>

        <div className="max-h-screen pr-4 overflow-auto ">
          {availableRepos.map((repo, i) => (
            <Input
              key={i}
              checked={selectedItems.some(({ value }) => value === repo.value)}
              isLoading={
                selectedItems.find(({ value }) => value === repo.value) &&
                isDeleting
              }
              id={i}
              value={repo.value}
              onChange={({ target }) =>
                handleOnChange({ id: i, value: target.value })
              }
            />
          ))}
        </div>

        <button
          onClick={openModal}
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
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h1 className="mb-2 text-lg font-semibold text-center text-gray-800">
            Delete {selectedItems.length} Repositories
          </h1>
          <p className="mb-4 text-sm text-center text-gray-600">
            Are you sure you want to continue?
          </p>
          <p className="flex items-center justify-center gap-2 p-3 text-xs font-semibold text-center text-orange-700 capitalize bg-yellow-100 border border-yellow-400 rounded-md shadow-sm">
            <GoAlert className="text-xs text-orange-700" />
            This action cannot be undone
          </p>
          <input
            onChange={handleValidation}
            className="w-full p-3 mt-4 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder={user}
          />
          {!isValid && (
            <p className="mt-2 text-xs text-red-500">
              Please enter your username to continue
            </p>
          )}
          <div className="flex justify-center gap-4 mt-6">
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
            <button
              onClick={closeModal}
              className="px-6 py-3 text-xs font-semibold text-gray-700 transition duration-200 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </Modal>
      </form>
    </Loading>
  );
};

export default RepoForm;
