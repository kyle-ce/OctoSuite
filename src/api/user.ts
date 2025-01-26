import { Octokit } from "octokit";
import { OctokitResponse } from "@octokit/types";
import { OCTOKIT_HEADER as headers } from "../libs/constants";

export const getUser = async (auth: string) => {
  const octokit = new Octokit({
    auth,
  });
  try {
    const data = await octokit.request("GET /user", {
      headers,
    });
    return data as OctokitResponse<IUser, number>;
  } catch (error) {
    console.log("There was a problem fetching user: ", error);
    return {} as OctokitResponse<IUser, number>;
  }
};
