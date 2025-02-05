import React, { useEffect } from "react";
import { GoPersonFill, GoDotFill, GoSync } from "react-icons/go";
import { useUser } from "../../../contexts/UserProvider";

// TODO: fix typing for props
const ListHeader = ({ items, refresh, toggleSelectAll, clearSelection }) => {
  const { user } = useUser();
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      toggleSelectAll(items);
    } else {
      clearSelection();
    }
  };

  return (
    <>
      <h1 className="text-base font-semibold "> Active Repositories</h1>
      <div className="flex items-center justify-between pr-2 mt-2">
        <div className="flex items-center gap-4 ">
          <input
            id="select-all"
            type="checkbox"
            onChange={handleSelectAll}
          ></input>
          <p className="flex items-center gap-1 pr-4 text-xs text-black/50">
            <GoPersonFill className="text-black" />
            {user} <GoDotFill className="text-black" /> {items.length}{" "}
            repositories
          </p>
        </div>
        <button
          onClick={refresh}
          type="button"
          className="p-2 text-xs text-white transition duration-100 border-solid rounded-full hover:bg-gray-300 hover:scale-105 hover:cursor-pointer focus:scale-105"
        >
          <GoSync className="text-black" />
        </button>
      </div>
    </>
  );
};

export default ListHeader;
