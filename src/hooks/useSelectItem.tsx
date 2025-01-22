import { useCallback, useState } from "react";

export const useSelectItem = <T,>() => {
  const [selectedItems, setSelectedItems] = useState<T[]>([]);

  const toggleSelect = useCallback((item: T) => {
    setSelectedItems((prevSelected) =>
      prevSelected.some((selected) => selected.id === item.id)
        ? prevSelected.filter((selected) => selected.id !== item.id)
        : [...prevSelected, item]
    );
  }, []);

  const toggleSelectAll = (items: T[]) => {
    setSelectedItems(items);
  };

  const clearSelection = () => setSelectedItems([]);

  return { selectedItems, toggleSelect, toggleSelectAll, clearSelection };
};
export default useSelectItem;
