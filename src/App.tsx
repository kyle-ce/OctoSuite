import React from "react";
import RepoForm from "./components/Form/RepoForm";
import Login from "./components/Login";
import { Routes, Route } from "react-router";
import UserProvider from "./utils/UserProvider";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route index element={<RepoForm />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;
