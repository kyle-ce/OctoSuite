import React from "react";
import { GoPasskeyFill } from "react-icons/go";
import { Outlet } from "react-router";
import { useUser } from "../utils/UserProvider";
import { getUser } from "../api/user";

const login = ({}: {}) => {
  const { setUser, token, setToken, setIsLoggingin } = useUser();

  const handleChange = ({ target }) => {
    setToken(target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoggingin(true);
    try {
      const {
        data: { login },
      } = await getUser(token);
      if (login) {
        setUser(login);
        setToken(token);
      }
      console.info("Success retreived ", login, "details");
    } catch (error) {
      setUser("");
      setToken("");
    } finally {
      setIsLoggingin(false);
    }
  };
  return (
    // https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic
    <>
      <div className="container mx-auto">
        {/* Add landing page */}
        <form
          className="flex flex-col justify-start p-3 "
          onSubmit={(e) => handleSubmit(e)}
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
      <Outlet />
    </>
  );
};

export default login;
