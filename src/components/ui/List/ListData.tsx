import React, { useEffect } from "react";

import ListItem from "./ListItem";

const List = <T,>({ items, selectedItems, isLoading, toggleSelect }) => {
  const handleToggleSelect = (item: T) => {
    toggleSelect(item);
  };

  const isItemSelected = (itemId) => {
    const found = selectedItems.find(({ id }) => id === itemId);
    return !!found;
  };

  return (
    <>
      <div className="max-h-screen pr-4 overflow-auto ">
        {items.map((item, i) => (
          <ListItem
            key={i}
            checked={selectedItems?.some(
              (selected) => item.value === selected.value
            )}
            isLoading={isItemSelected(item.id) && isLoading}
            id={item.id}
            value={item.value}
            onChange={({ target }) =>
              handleToggleSelect({ id: target.id, value: target.value } as T)
            }
          />
        ))}
      </div>
    </>
  );
};

export default List;
