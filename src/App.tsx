import React from "react";
import List from "./components/List";
import Login from "./routes/Login";
import { Routes, Route } from "react-router";
import UserProvider from "./UserProvider";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route index element={<List />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;
