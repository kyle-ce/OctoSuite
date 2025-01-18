import React, { createContext, useCallback, useContext, useState } from "react";
import { getAllRepositoriesNames } from "../api/repo";
interface IUserContext {
  user: string;
  setUser: (user: string) => void;
  token: string;
  setToken: (token: string) => void;
  isLoggingin: boolean;
  setIsLoggingin: (isLoggingin: boolean) => void;
  availableRepos: IRepoItem[];
  setAvailableRepos: (repos: IRepoItem[]) => void;
  isLoading: boolean;
  refreshRepositories: (auth: string) => void;
}
const UserContext = createContext<IUserContext | undefined>(undefined);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  const [isLoggingin, setIsLoggingin] = useState(false);
  const [availableRepos, setAvailableRepos] = useState<IRepoItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const refreshRepositories = useCallback(async (auth) => {
    setIsLoading(true);
    try {
      // get all repos api call
      const names = await getAllRepositoriesNames(auth);
      if (names) {
        setAvailableRepos(
          names.map((repo, i) => {
            return { value: repo, id: i };
          })
        );
      }
    } catch (error) {
      console.log(error);
      setAvailableRepos([]);
    } finally {
      setIsLoading(false);
    }
  }, []);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        isLoggingin,
        setIsLoggingin,
        availableRepos,
        setAvailableRepos,
        isLoading,
        refreshRepositories,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used with in a UserProvider");
  }
  return context;
};
