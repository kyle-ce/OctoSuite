import React from "react";
import { GoPasskeyFill } from "react-icons/go";
import { Outlet, useNavigate } from "react-router";
import { useUser } from "../../contexts/UserProvider";
import { useToast } from "../../contexts/ToastProvider";
import { fetchUserDetails } from "../../services/userService";

const Login = () => {
  const { token, setToken, updateUser, setIsLoggingin } = useUser();
  const { addToast } = useToast();

  const navigate = useNavigate();

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
      navigate("/repositories");
    } else {
      updateUser("", "");
      toastFailedLogin(data);
    }
    setIsLoggingin(false);
  };

  return (
    // https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic
    <div className="container flex items-center justify-center h-screen mx-auto">
      {/* Add landing page */}
      <form
        className="flex flex-col max-w-sm p-3 bg-white border-2 border-solid rounded-md shadow-2xl md:max-w-xl border-black/50"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h2 className="flex items-center gap-1 text-base font-bold text-purple-600 md:text-xl">
          <GoPasskeyFill />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
            Login to OctoSuite
          </span>
        </h2>
        <p className="mb-2 text-xs font-semibold text-gray-700 md:text-base ">
          Enter your personal access token to get started
        </p>
        <label className="text-xs text-gray-500 md:text-sm">
          Personal Access Token
        </label>
        <input
          type="password"
          placeholder="YOUR-PERSONAL-ACCESS-TOKEN"
          value={token as string}
          onChange={handleChange}
          className="w-full p-1 text-xs tracking-wider border border-solid rounded-sm outline-none md:text-sm focus:ring-1 focus:ring-purple-300 text-black/80"
        />
        <button type="submit" className="mt-2 button-primary ">
          Login
        </button>
      </form>
      <Outlet />
    </div>
  );
};

export default Login;
