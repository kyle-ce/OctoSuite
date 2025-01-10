import React from "react";

const RepoFormInput = ({ value, onRemove, onChange }) => {
  return (
    <div className="flex items-center justify-center mt-1">
      <label className="text-xs " htmlFor="repo"></label>
      <input
        value={value}
        onChange={onChange}
        type="text"
        className="w-full p-1 text-xs leading-5 border border-solid text-black/80"
        id="repo"
        placeholder="https://github.com/user/repo.git"
      />
      <button
        onClick={onRemove}
        type="button"
        className="h-full px-2 py-1 text-xs leading-5 bg-red-300 border border-red-500 border-solid rounded-sm hover:bg-red-300/50 hover:border-black/50"
      >
        x
      </button>
    </div>
  );
};

export default RepoFormInput;
