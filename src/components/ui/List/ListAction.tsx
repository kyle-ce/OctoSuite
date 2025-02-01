import React, { useState } from "react";
import { useUser } from "../../../contexts/UserProvider";
import DeleteRepoModal from "../../DeleteRepoModal";

// TODO: fix typing for props add style for element failed to delete
const ListAction = ({ items, clearSelection, onSubmit }) => {
  const { user } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async () => {
    setIsModalOpen(false);
    onSubmit(items);
    clearSelection();
  };

  return (
    <>
      <div className="flex justify-end w-full pr-4">
        <button
          onClick={() => setIsModalOpen(true)}
          type="button"
          disabled={!items?.length || false}
          className={`px-2 py-1 mt-2 text-xs text-white transition duration-100 border border-solid rounded-sm  ${
            !items?.length || false
              ? "bg-gray-300 border-gray-300 cursor-not-allowed"
              : "bg-red-500 border-red-500 hover:bg-red-600 hover:scale-105 hover:cursor-pointer focus:scale-105"
          }`}
        >
          <span className="flex items-center justify-center gap-1">
            Delete {!!items?.length && <p>({items.length})</p>}
          </span>
        </button>
      </div>
      <DeleteRepoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        handleSubmit={handleSubmit}
        items={items}
        user={user}
      />
    </>
  );
};

export default ListAction;
