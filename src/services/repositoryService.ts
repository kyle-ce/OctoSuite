import { deleteRepo, getAllRepositoriesNames } from "../api/repo";

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

export const fetchRepositoriesData = async (auth): Promise<IRepositoryData> => {
  try {
    const data = await getAllRepositoriesNames(auth);
    if (data) {
      // name is unique value! github does not allow you to name repo same names
      const reposWithIds = data.map((name) => ({ value: name, id: name }));
      return { success: true, items: reposWithIds };
    }
    return { success: false, error: "repository data undefined" };
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return { success: false, error: error };
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
