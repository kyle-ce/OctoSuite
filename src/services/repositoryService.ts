import { deleteRepo, getAllRepositoriesNames } from "../api/repoistory";

export type repository = { value: string; id: string };

interface IRepositoryData {
  success: boolean;
  items?: repository[];
  error?: string;
}
interface IErrorDetails {
  item: string;
  error: string;
}
// The purpose of this service is to modularize the data fetching behavior
// the getAllRepositoriesNames is a standard api call that returns data
// the fetchRepositoriesData is a transformation layer to return specific
// response my comopnent expects. Down the line if requirements change I will
// always have the straight data from API call and I would make necissary changes
// in this service to match with new requirements that way my components can just
// simply call a service and my pattern will fetch teh data from api endpoint then
// transform it special for component consumption
export const fetchRepositoriesData = async (auth): Promise<IRepositoryData> => {
  try {
    const data = await getAllRepositoriesNames(auth);
    // name is unique value! github does not allow you to name repo same names
    const reposWithIds = data.map((name) => ({ value: name, id: name }));
    return { success: true, items: reposWithIds };
  } catch (error) {
    // console.error("Failed to fetch data:", error);
    return { success: false, error: error || "Failed to fetch repositories" };
  }
};

export const deleteRepositories = async (
  items: repository[],
  auth: string,
  user: string
): Promise<{ success: string[]; errors: IErrorDetails[] }> => {
  const success: string[] = [];
  const errors: IErrorDetails[] = [];

  const promises = items.map(({ value }) => deleteRepo(auth, user, value));
  const settledPromises = await Promise.allSettled(promises);

  settledPromises.forEach((result, i) => {
    if (result.status === "fulfilled") {
      success.push(items[i].value);
    } else if (result.status === "rejected") {
      errors.push({ item: items[i].value, error: result.reason });
    }
  });

  return { success, errors };
};
