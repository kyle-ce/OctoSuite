import { getUser } from "../api/user";

export const fetchUserDetails = async (
  auth: string
): Promise<{
  success: boolean;
  user?: string;
  error?: string;
}> => {
  try {
    const response = await getUser(auth);
    if (response?.data?.login) {
      return { success: true, user: response.data.login };
    } else {
      return { success: false, error: "User details not found." };
    }
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
};
