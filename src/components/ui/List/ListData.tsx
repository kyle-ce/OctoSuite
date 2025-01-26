import React from "react";

import ListItem from "./ListItem";

const List = ({ items, selectedItems, isDeleting, toggleSelect }) => {
  const handleToggleSelect = (item: IRepoItem) => {
    toggleSelect(item);
  };

  return (
    <>
      <div className="max-h-screen pr-4 overflow-auto ">
        {items.map((repo, i) => (
          <ListItem
            key={i}
            checked={selectedItems?.some((item) => item.value === repo.value)}
            isLoading={
              selectedItems?.find(({ id }) => id === repo.id) && isDeleting
            }
            id={repo.id}
            value={repo.value}
            onChange={({ target }) => {
              console.log("Selected item target", target);
              return handleToggleSelect({ id: target.id, value: target.value });
            }}
          />
        ))}
      </div>
    </>
  );
};

export default List;
