import React from "react";

const Input = ({ value, id, onChange }) => {
  return (
    <div className="mt-1 ">
      <div className="relative flex w-full border-b group">
        <label className="w-full text-sm text-black/80" htmlFor={`repo-${id}`}>
          {value}
        </label>
        <input
          value={value}
          onChange={onChange}
          type="checkbox"
          className="p-1 text-xs leading-5 border border-solid text-black/80"
          id={`repo-${id}`}
          placeholder="https://github.com/user/repo.git"
        />
      </div>
    </div>
  );
};

export default Input;
