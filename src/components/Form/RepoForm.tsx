import React, { useEffect, useState } from "react";
import Input from "./Input";
import { deleteRepo, getAllRepositories } from "../../api/repo";
import { GoPersonFill, GoDotFill } from "react-icons/go";

import Loading from "../loading";
import { useUser } from "../../utils/UserProvider";

const RepoForm = () => {
  const { user, token: auth, isLoggingin } = useUser();
  const [repos, setRepos] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedItems, setSelectedItems] = useState<
    { id: number; value: string }[]
  >([]);

  const handleOnChange = (value: { id: number; value: string }) => {
    setSelectedItems((prev) =>
      prev.find((item) => item.value === value.value)
        ? prev.filter((item) => item.value !== value.value)
        : [...prev, value]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success: Array<string> = [];
    const errors: Array<{ repo: string; error: string }> = [];
    setIsDeleting(true);
    try {
      const promises = selectedItems.map((e, i) =>
        deleteRepo(auth, user, e.value)
      );
      const settledPromises = await Promise.allSettled(promises);
      settledPromises.forEach((result, i) => {
        result.status === "fulfilled"
          ? success.push(selectedItems[i].value)
          : errors.push({
              repo: selectedItems[i].value,
              error: result.reason.message,
            });
      });

      // Display success and error messages
      if (success.length > 0) {
        alert(`Successfully deleted:\n${success.join("\n")}`);
      }

      if (errors.length > 0) {
        const errorMessages = errors
          .map((err) => `${err.repo}: ${err.error || "Unknown error"}`)
          .join("\n");
        alert(`Failed to delete:\n${errorMessages}`);
      }
    } catch (error) {
      console.error("Unexpected error processing deletions:", error);
    } finally {
      setRepos((prevRepos) =>
        prevRepos.filter((repo) => !success.includes(repo))
      );
      setSelectedItems([]);
      setIsDeleting(false);
    }
  };

  const getAllRepoistoryNames = async () => {
    setIsLoading(true);
    try {
      const names = await getAllRepositories(auth);
      if (names) setRepos(names);
    } catch (error) {
      console.log(error);
      setRepos([]);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (user) getAllRepoistoryNames();
  }, [user, isLoggingin]);

  if (!user && !isLoggingin) {
    return;
  }
  return (
    <Loading isLoading={isLoading || isLoggingin}>
      <form
        className="container w-full p-3 px-2 mx-auto"
        id="repos"
        onSubmit={handleSubmit}
      >
        <h1 className="text-base font-semibold "> Active Repositories</h1>
        <p className="mb-2 text-xs text-black/50">
          Select available repositories to delete forever
        </p>
        <div className="flex justify-between pr-4 text-xs text-black/50">
          <p className="flex items-center gap-1 ">
            <GoPersonFill className="text-black" />
            {user || "Authenticate yourself"}{" "}
            <GoDotFill className="text-black" /> {repos.length} repositories
          </p>
          <span className="flex gap-1">
            <input id="selectall" type="checkbox"></input>
          </span>
        </div>

        <div className="max-h-screen pr-4 overflow-auto ">
          {repos.map((value, i) => (
            <Input
              key={i}
              isLoading={
                selectedItems.find((item) => item.value === value) && isDeleting
              }
              id={i}
              value={value}
              onChange={({ target }) =>
                handleOnChange({ id: i, value: target.value })
              }
            />
          ))}
        </div>

        <button className="px-2 py-1 mt-2 text-xs transition duration-100 bg-red-300 border border-red-500 border-solid rounded-sm hover:bg-red-300/50 hover:scale-105 hover:cursor-pointer focus:scale-105">
          <span className="flex items-center justify-center gap-1">
            Delete {!!selectedItems.length && <p>({selectedItems.length})</p>}
          </span>
        </button>
      </form>
    </Loading>
  );
};

export default RepoForm;
