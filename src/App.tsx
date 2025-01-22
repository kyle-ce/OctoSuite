import React from "react";
import RepoList from "./components/Form/List";
import Login from "./components/Login";
import { Routes, Route } from "react-router";
import UserProvider from "./utils/UserProvider";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route index element={<RepoList />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;
