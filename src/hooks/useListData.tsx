import { useState, useCallback } from "react";
import { IRepoItem } from "../types";
import { getAllRepositoriesNames, deleteRepo } from "../api/repo";

interface IErrorDetails {
  repo: string;
  error: string;
}

export const deleteSelectedRepos = async (
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
    } else if (result.status === "rejected") {
      errors.push({ repo: items[i].value, error: result.reason });
    }
  });

  return { success, errors };
};

const useListData = (auth: string, user: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<IRepoItem[]>([]);
  const [selectedItems, setSelectedItems] = useState<IRepoItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const names = await getAllRepositoriesNames(auth);
      if (names) {
        setData(names.map((repo, i) => ({ value: repo, id: i })));
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setData([]);
    } finally {
      setIsLoading(false);
    }
  }, [auth]);

  const toggleSelect = useCallback((item: IRepoItem) => {
    setSelectedItems((prevSelected) =>
      prevSelected.some((selected) => selected.id === item.id)
        ? prevSelected.filter((selected) => selected.id !== item.id)
        : [...prevSelected, item]
    );
  }, []);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);
  const handleValidation = (value: string) => {
    // validate input matches "{owner}" using regex
    const regex = new RegExp(user, "i");
    console.log(value, !regex.test(value));
    if (!regex.test(value)) {
      return setIsValid(false);
    }
    return setIsValid(true);
  };

  const deleteSelectedData = useCallback(async () => {
    setIsDeleting(true);
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
    setData((prev: IRepoItem[]) =>
      prev.filter(({ value }) => !success.includes(value))
    );
    // Reset all selected items
    setSelectedItems([]);
    setIsDeleting(false);
    closeModal();
  }, [selectedItems, auth, user, closeModal]);

  return {
    data,
    isLoading,
    selectedItems,
    setSelectedItems,
    isModalOpen,
    isDeleting,
    fetchData,
    toggleSelect,
    openModal,
    closeModal,
    isValid,
    handleValidation,
    deleteSelectedData,
  };
};

export default useListData;
