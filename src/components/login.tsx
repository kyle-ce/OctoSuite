import React, { useEffect, useRef, useState } from "react";
import { GoPasskeyFill } from "react-icons/go";
import { Outlet } from "react-router";
import { useUser } from "../utils/UserProvider";
import { getUser } from "../api/user";
import useThrottle from "../hooks/useThrottle";

const login = () => {
  const {
    setUser,
    token,
    setToken,
    setIsLoggingin,
    user,
    refreshRepositories,
  } = useUser();
  const pullDownRef = useRef<HTMLDivElement>(null);
  const [startY, setStartY] = useState(0);

  const handleChange = ({ target }) => {
    setToken(target.value);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingin(true);
    try {
      const { data } = await getUser(token);
      setUser(data?.login || "");
      setToken(data?.login ? token : "");
      console.info("Successfully retrieved user details:", data?.login);
    } catch {
      setUser("");
      setToken("");
    } finally {
      setIsLoggingin(false);
    }
  };
  const throttleRefresh = useThrottle(async () => {
    refreshRepositories(token);
    console.log("Refreshing repositories...");
  }, 3000);

  useEffect(() => {
    if (!user) return;
    const handleTouchStart = (e) => {
      setStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
      const currentY = e.touches[0].clientY;
      if (pullDownRef.current?.scrollTop === 0 && currentY - startY > 50) {
        throttleRefresh();
      }
    };
    const handleWheel = (e) => {
      if (pullDownRef.current?.scrollTop === 0 && e.deltaY < 0) {
        throttleRefresh();
      }
    };

    const container = pullDownRef.current;
    container?.addEventListener("touchstart", handleTouchStart);
    container?.addEventListener("touchmove", handleTouchMove);
    container?.addEventListener("wheel", handleWheel);

    return () => {
      container?.removeEventListener("touchstart", handleTouchStart);
      container?.removeEventListener("touchmove", handleTouchMove);
      container?.removeEventListener("wheel", handleWheel);
    };
  }, [startY, user]);
  return (
    // https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic
    <div
      ref={pullDownRef}
      className="container mx-auto border border-solid border-red"
    >
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
          className="px-2 py-1 mt-2 text-xs text-white transition duration-100 bg-green-500 border border-green-500 border-solid rounded-sm hover:bg-green-300"
        >
          Login
        </button>
      </form>
      <Outlet />
    </div>
  );
};

export default login;
