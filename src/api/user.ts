import { Octokit } from "octokit";
import { delay } from "../utils";
import { OctokitResponse } from "@octokit/types";

export const getUser = async (
  auth: string
): Promise<OctokitResponse<IUser, number>> => {
  const octokit = new Octokit({
    auth,
  });
  return delay<OctokitResponse<IUser, number>>(async () => {
    try {
      const data = await octokit.request("GET /user", {
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      return data as OctokitResponse<IUser, number>;
    } catch (error) {
      console.log("There was a problem fetching user: ", error);
      alert(`There was a problem fetching user: ${error}`);
      return {} as OctokitResponse<IUser, number>;
    }
  }, 1000);
};
