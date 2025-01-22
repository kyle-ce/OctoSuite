import { useState, useCallback } from "react";
import { getAllRepositoriesNames, deleteRepo } from "../api/repo";

interface IErrorDetails {
  repo: string;
  error: string;
}
export interface IRepoItem {
  id: number;
  value: string;
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

const useManageRepo = (auth: string, user: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<IRepoItem[]>([]);

  const [isDeleting, setIsDeleting] = useState(false);

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
      setData((prev: IRepoItem[]) =>
        prev.filter(({ value }) => !success.includes(value))
      );
      // Reset all selected items
      setIsDeleting(false);
    },
    [auth, user]
  );

  //   const toggleSelect = useCallback((item: IRepoItem) => {
  //     setSelectedItems((prevSelected) =>
  //       prevSelected.some((selected) => selected.id === item.id)
  //         ? prevSelected.filter((selected) => selected.id !== item.id)
  //         : [...prevSelected, item]
  //     );
  //   }, []);

  //   const handleValidation = (value: string) => {
  //     // validate input matches "{owner}" using regex
  //     const regex = new RegExp(user, "i");
  //     console.log(value, !regex.test(value));
  //     if (!regex.test(value)) {
  //       return setIsValid(false);
  //     }
  //     return setIsValid(true);
  //   };

  return {
    data,
    isLoading,
    isDeleting,
    fetchData,
    deleteSelectedData,
  };
};

export default useManageRepo;
