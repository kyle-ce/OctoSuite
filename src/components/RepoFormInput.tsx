import React from "react";

const RepoFormInput = ({ value, onRemove, onChange }) => {
  return (
    <div className="mt-1 ">
      <label className="text-xs " htmlFor="repo"></label>
      <div className="relative w-full group">
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
          className="opacity-10 absolute right-2 top-1/2 -translate-y-1/2 px-[.4em] py-[.2em] text-xs leading-3 bg-red-300 border border-red-500 border-solid rounded-sm hover:bg-red-300/50 hover:border-black/50 group-hover:opacity-100 duration-300 "
        >
          x
        </button>
      </div>
    </div>
  );
};

export default RepoFormInput;
