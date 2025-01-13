import { Octokit } from "octokit";
import { delay } from "../utils";
import { OctokitResponse } from "@octokit/types";
// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: import.meta.env.VITE_AUTH,
});

export const getAllRepositories = async () => {
  try {
    const { data } = await octokit.request("GET /user/repos", {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    const names = data.map(({ name }) => name);
    return names;
  } catch (error) {
    console.error("Error fetching all repositories:", error);
    return [];
  }
};

export const deleteRepo = async (owner, repo) => {
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
  }
};
