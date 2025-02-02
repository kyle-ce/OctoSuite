import { useState } from "react";
import useThrottle from "./useThrottle";
import { useToast } from "../contexts/ToastProvider";
import { repository } from "../services/repositoryService";

type fetchDataResponse<T> = {
  success: boolean;
  item: T[];
};
type deleteDataResponse<T> = {
  success: T[];
  errors: { item: string; error: string };
};
// TODO: fix typing for hook
interface IList<T> {
  fetchDataHandler: () => Promise<fetchDataResponse<T>>;
  deleteDataHandler: (selectedItems: T[]) => Promise<deleteDataResponse<T>>;
}

export const useList = <T extends repository>(
  fetchDataHandler,
  deleteDataHandler
) => {
  const [selectedItems, setSelectedItems] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [data, setData] = useState<T[]>([]);

  const { addToast } = useToast();

  const successDeletingToast = (success) => {
    const toast = {
      title: `Successfully Deleted ${success.length} Repositories`,
      description: `\n${success.join("\n")}`,
      variant: "success",
    };
    addToast(toast);
  };
  const failedDeletingToast = (errors) => {
    const toast = {
      title: `Failed Deleteing`,
      description: `\n${errors
        .map((err) => `${err.repo}: ${err.error}`)
        .join("\n")}`,
      variant: "alert",
    };
    addToast(toast);
  };

  const fetchData = useThrottle(async () => {
    setIsLoading(true);
    const data = await fetchDataHandler();
    if (data.success) {
      setData(data.items as T[]);
    } else {
      const error = {
        title: "Failed to fetch data",
        description: data.error.message,
        variant: "error",
      };
      addToast(error);
      console.error("Failed to fetch data");
    }
    setIsLoading(false);
  }, 3000);

  const deleteSelectedData = async (selectedItems: T[]) => {
    setIsDeleting(true);
    const { success, errors } = await deleteDataHandler(selectedItems);
    // After toasting remove data
    setData((prev) => prev.filter(({ value }) => !success.includes(value)));
    setIsDeleting(false);
    clearSelection();
    if (success.length) {
      successDeletingToast(success);
    }
    if (errors.length) {
      failedDeletingToast(errors);
    }

    //TEST DELETE
    // new Promise((resolve) =>
    //   setTimeout(() => {
    //     console.log("data deleted");
    //     setIsDeleting(false);
    //     clearSelection();
    //     return resolve;
    //   }, 5000)
    // );
  };

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
