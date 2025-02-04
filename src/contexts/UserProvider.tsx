import React, { createContext, useContext, useState } from "react";
interface IUserContext {
  user: string;
  token: string;
  setToken: (token: string) => void;
  updateUser: (login: string, token: string) => void;
  isLoggingin: boolean;
  setIsLoggingin: (isLoggingin: boolean) => void;
}
export const UserContext = createContext<IUserContext | undefined>(undefined);

const intitUser = { user: "", token: "", isLoggingin: false };

const UserProvider = ({ children, initalUser = intitUser }) => {
  const [user, setUser] = useState(initalUser.user);
  const [token, setToken] = useState<string>(initalUser.token);
  const [isLoggingin, setIsLoggingin] = useState(intitUser.isLoggingin);

  const updateUser = (login, token) => {
    setUser(login);
    setToken(token);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
        token,
        setToken,
        isLoggingin,
        setIsLoggingin,
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
