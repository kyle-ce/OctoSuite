import React, { useState } from "react";
import { GoPasskeyFill } from "react-icons/go";

const login = ({ onClick }: { onClick: (token: string) => Promise<void> }) => {
  const [token, setToken] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    onClick(token);
  };
  const handleChange = ({ target }) => {
    setToken(target.value);
  };
  return (
    <div>
      <form
        className="p-3 overflow-auto border border-solid rounded-sm shadow-lg border-black/30 "
        onSubmit={handleClick}
      >
        <h1 className="flex items-center gap-1 text-base font-semibold">
          <GoPasskeyFill />
          PAT
        </h1>
        <p className="mb-4 text-xs text-black/50">
          Enter your personal access token to get started
        </p>
        {/* <label>PAT</label> */}
        <input
          type="password"
          placeholder="YOUR-PERSONAL-ACCESS-TOKEN"
          value={token}
          onChange={handleChange}
          className="w-full p-1 text-xs leading-5 border border-solid text-black/80"
        />
        <button
          type="submit"
          className="px-2 py-1 mt-2 text-xs transition duration-100 bg-green-300 border border-green-500 border-solid rounded-sm hover:bg-green-300/50 hover:scale-105 focus:scale-105"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default login;
