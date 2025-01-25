import { Octokit } from "octokit";

// Octokit.js
// https://github.com/octokit/core.js#readme

export const getAllRepositoriesNames = async (auth) => {
  const octokit = new Octokit({
    auth,
  });
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

export const deleteRepo = async (auth, owner, repo) => {
  const octokit = new Octokit({
    auth,
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
  }
};
