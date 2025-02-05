import React from "react";
import { GoPasskeyFill } from "react-icons/go";
import { Outlet } from "react-router";
import { useUser } from "../../contexts/UserProvider";
import { useToast } from "../../contexts/ToastProvider";
import { fetchUserDetails } from "../../services/userService";

const Login = () => {
  const { token, setToken, updateUser, setIsLoggingin } = useUser();
  const { addToast } = useToast();

  const toastSuccessLogin = (user) => {
    addToast({
      title: "Successful",
      description: `Successfully retrieved user details: ${user}`,
      variant: "success",
    });
    console.info("Successfully retrieved user details:", user);
  };
  const toastFailedLogin = (data) => {
    addToast({
      title: "Failed to login",
      description: `Failed to retreived user details`,
      variant: "error",
    });
    console.info("Failed to retreived user details:", data);
  };
  const handleChange = ({ target }) => {
    setToken(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      toastFailedLogin("Invalid token");
      return;
    }
    setIsLoggingin(true);

    const data = await fetchUserDetails(token);
    if (data.success) {
      updateUser(data.user as string, token);
      toastSuccessLogin(data.user);
    } else {
      updateUser("", "");
      toastFailedLogin(data);
    }
    setIsLoggingin(false);
  };

  return (
    // https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic
    <div className="container mx-auto mt-4 bg-white border border-solid rounded-md shadow-xl">
      {/* Add landing page */}
      <form
        className="flex flex-col justify-start p-3 "
        onSubmit={(e) => handleSubmit(e)}
      >
        <h2 className="flex items-center gap-1 text-base font-semibold">
          <GoPasskeyFill />
          PAT
        </h2>
        <p className="mb-4 text-xs text-black/50">
          Enter your personal access token to get started
        </p>
        {/* <label>PAT</label> */}
        <input
          type="password"
          placeholder="YOUR-PERSONAL-ACCESS-TOKEN"
          value={token as string}
          onChange={handleChange}
          className="w-full p-1 text-xs leading-5 border border-solid text-black/80"
        />
        <button
          type="submit"
          className="px-2 py-1 mt-2 text-xs font-semibold text-white transition duration-100 bg-green-500 border border-green-500 border-solid rounded-sm hover:bg-green-600"
        >
          Login
        </button>
      </form>
      <Outlet />
    </div>
  );
};

export default Login;
