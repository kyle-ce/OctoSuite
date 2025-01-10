import React, { useEffect, useState } from "react";
import RepoFormInput from "./RepoFormInput";
import { Octokit } from "octokit";

const RepoForm = () => {
  const [repos, setRepos] = useState([""]);

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

    const promises = repos.map((e, i) => deleteRepo("kyle-ce", e));
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

    // alert(`Submitted Values: ${repos.join(", ")}`);
  };

  const getAllRepos = async () => {
    // Octokit.js
    // https://github.com/octokit/core.js#readme
    const octokit = new Octokit({
      auth: import.meta.env.VITE_AUTH,
    });

    return await octokit.request("GET /user/repos", {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
  };
  const deleteRepo = async (owner, repo) => {
    // Octokit.js
    // https://github.com/octokit/core.js#readme
    const octokit = new Octokit({
      auth: import.meta.env.VITE_AUTH,
    });
    try {
      await octokit.request(`DELETE /repos/{owner}/{repo}`, {
        accept: "application/vnd.github+json",
        owner,
        repo,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      return repo;
    } catch (error) {
      console.error("Error deleting repository: ", error);
      throw new Error(error.message);
      // alert(`${repo}: \n${error}`);
    }
  };
  useEffect(() => {
    getAllRepos().then(({ data }) => {
      console.log("repos:", data);
      const names = data.map(({ name }) => name);
      console.log("names", names);
      // setRepos(names);
    });
  }, []);

  return (
    <form
      className="p-3 border border-solid rounded-sm shadow-lg border-black/30 "
      id="repos"
      onSubmit={handleSubmit}
    >
      <h1 className="text-base font-semibold "> Delete Repos</h1>
      <p className="mb-4 text-xs text-black/50">
        Enter github repositories to submit for deletion
      </p>
      {repos.map((value, i) => (
        <RepoFormInput
          key={i}
          value={value}
          onChange={({ target }) => handleOnChange(i, target.value)}
          onRemove={() => handleRemoveInput(i)}
        />
      ))}

      <button
        type="button"
        onClick={handleAddInput}
        className="px-2 py-1 mt-1 text-xs leading-5 bg-gray-300 border border-solid rounded-sm hover:bg-gray-300/50 hover:border-black/50"
      >
        +
      </button>
      <br />
      <button className="px-2 py-1 mt-2 text-xs transition duration-100 bg-red-300 border border-red-500 border-solid rounded-sm hover:bg-red-300/50 hover:scale-105 focus:scale-105">
        Delete
      </button>
    </form>
  );
};

export default RepoForm;
