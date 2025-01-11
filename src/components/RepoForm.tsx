import React, { useEffect, useState } from "react";
import RepoFormInput from "./RepoFormInput";
import { deleteRepo, getAllRepositories } from "../api/repo";
import { RotatingLines } from "react-loader-spinner";

const RepoForm = ({
  user,
  isLoading,
}: {
  user: string;
  isLoading: boolean;
}) => {
  const [repos, setRepos] = useState([""]);
  const [owner, setOwner] = useState([""]);
  const handleOnChange = (index, newValue) => {
    const updatedInputs = [...repos];
    updatedInputs[index] = newValue;
    setRepos(updatedInputs);
  };

  const handleAddInput = () => {
    setRepos([...repos, ""]); // Add a new empty input
  };

  const handleRemoveInput = (index: number) => {
    if (repos.length === 1) {
      setRepos([""]);
      return;
    }
    setRepos(repos.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // map through inputs and delete repos
    const promises = repos.map((e, i) => deleteRepo(owner, e));
    const success: Array<string> = [];
    const errors: Array<{ repo: string; error: string }> = [];
    try {
      const repoPromises = await Promise.allSettled(promises);
      repoPromises.forEach((result, i) => {
        result.status === "fulfilled"
          ? success.push(repos[i])
          : errors.push({ repo: repos[i], error: result.reason.message });
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
    }
  };

  const getAllRepoistoryNames = async () => {
    const names = await getAllRepositories();
    if (names) setRepos(names);
  };

  useEffect(() => {
    // getAllRepoistoryNames();
  }, []);

  return (
    <form
      className="p-3 overflow-auto border border-solid rounded-sm shadow-lg border-black/30 "
      id="repos"
      onSubmit={handleSubmit}
    >
      <h1 className="text-base font-semibold "> Delete Repos</h1>
      <p className="mb-4 text-xs text-black/50">
        Enter github repositories to submit for deletion
      </p>
      {isLoading ? (
        <RotatingLines
          visible={true}
          height="16"
          width="16"
          strokeColor="gray"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : (
        <p className="text-xs text-black/50">{user}</p>
      )}
      <div className="max-h-[500px] overflow-auto">
        {repos.map((value, i) => (
          <RepoFormInput
            key={i}
            value={value}
            onChange={({ target }) => handleOnChange(i, target.value)}
            onRemove={() => handleRemoveInput(i)}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={handleAddInput}
        className="px-[.4em] py-[.2em] mt-1 text-xs leading-3 bg-gray-300 border border-gray-500 border-solid rounded-sm hover:bg-gray-300/50 hover:border-black/50"
      >
        +
      </button>
      <br />
      <button
        disabled
        className="px-2 py-1 mt-2 text-xs transition duration-100 bg-red-300 border border-red-500 border-solid rounded-sm hover:bg-red-300/50 hover:scale-105 focus:scale-105"
      >
        Delete
      </button>
    </form>
  );
};

export default RepoForm;
