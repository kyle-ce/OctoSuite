import React from "react";

import ListItem from "./ListItem";

const List = <T,>({ items, selectedItems, isDeleting, toggleSelect }) => {
  const handleToggleSelect = (item: T) => {
    toggleSelect(item);
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
            isLoading={
              selectedItems?.find(({ id }) => id === item.id) && isDeleting
            }
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
