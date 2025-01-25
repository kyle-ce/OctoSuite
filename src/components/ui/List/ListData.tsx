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
              selectedItems?.find(({ value }) => value === repo.value) &&
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
    </>
  );
};

export default List;
