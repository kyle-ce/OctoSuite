import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Input = ({ value, id, onChange, isLoading, checked }) => {
  return (
    <div className="mt-1 ">
      <div className="relative flex w-full gap-1 border-b group">
        {isLoading && (
          <RotatingLines
            visible={true}
            width="15"
            strokeColor="gray"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
          />
        )}
        {/* {isFailed && <p>X</p>} */}
        <label className="w-full text-sm text-black/80" htmlFor={`repo-${id}`}>
          {value}
        </label>
        <input
          value={value}
          checked={checked}
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
