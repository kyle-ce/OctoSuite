import { Octokit } from "octokit";
import { OctokitResponse } from "@octokit/types";
import { OCTOKIT_HEADER as headers } from "../libs/constants";

export const getUser = async (auth: string) => {
  const octokit = new Octokit({
    auth,
  });
  const data = await octokit.request("GET /user", {
    headers,
  });
  return data as OctokitResponse<IUser, number>;
};
