import { useCallback, useState } from "react";
import { deleteRepo, getAllRepositoriesNames } from "../api/repo";
import useThrottle from "./useThrottle";

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

export const useList = <T extends IRepoItem>(auth, user) => {
  const [selectedItems, setSelectedItems] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchData = useThrottle(async () => {
    setIsLoading(true);
    try {
      const names = await getAllRepositoriesNames(auth);
      if (names) {
        setData(names.map((name, i) => ({ value: name, id: i } as T)));
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setData([]);
    } finally {
      setIsLoading(false);
    }
  }, 3000);

  const deleteSelectedData = useCallback(
    async (selectedItems) => {
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
      setData((prev) => prev.filter(({ value }) => !success.includes(value)));
      // Reset all selected items
      setIsDeleting(false);
    },
    [auth, user]
  );

  const toggleSelect = (item: T) => {
    setSelectedItems((prevSelected) =>
      prevSelected?.some((selected) => selected.id === item.id)
        ? prevSelected.filter((selected) => selected.id !== item.id)
        : [...prevSelected, item]
    );
  };

  const toggleSelectAll = (items: T[]) => {
    setSelectedItems(items);
  };

  const clearSelection = () => setSelectedItems([]);

  return {
    data,
    selectedItems,
    fetchData,
    deleteSelectedData,
    toggleSelect,
    toggleSelectAll,
    clearSelection,
    isDeleting,
    isLoading,
  };
};
export default useList;
