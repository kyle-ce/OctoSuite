import { Octokit } from "octokit";
import { OCTOKIT_HEADER as headers } from "../libs/constants";

// Octokit.js
// https://github.com/octokit/core.js#readme

export const getAllRepositoriesNames = async (auth) => {
  const octokit = new Octokit({
    auth,
  });
  try {
    const { data } = await octokit.request("GET /user/repos", { headers });
    if (data) return data.map(({ name }) => name);
  } catch (error) {
    console.error("Error fetching all repositories:", error);
    return [];
  }
};

export const deleteRepo = async (auth, owner, repo) => {
  const octokit = new Octokit({
    auth,
  });
  try {
    await octokit.request(`DELETE /repos/{owner}/{repo}`, {
      accept: "application/vnd.github+json",
      owner,
      repo,
      headers,
    });
    return repo;
  } catch (error) {
    console.error("Error deleting repository: ", error);
    throw new Error(error.message);
  }
};
