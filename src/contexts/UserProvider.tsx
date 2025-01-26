import React, { createContext, useContext, useState } from "react";
interface IUserContext {
  user: string;
  token: string;
  setToken: (token: string) => void;
  updateUser: (login: string, token: string) => void;
  isLoggingin: boolean;
  setIsLoggingin: (isLoggingin: boolean) => void;
}
const UserContext = createContext<IUserContext | undefined>(undefined);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState<string>("");
  const [isLoggingin, setIsLoggingin] = useState(false);

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
