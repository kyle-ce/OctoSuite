import React from "react";
import List from "./components/ui/List";
import Login from "./routes/Login";
import { Routes, Route } from "react-router";
import UserProvider from "./UserProvider";
import Toast from "./components/ui/Toast";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route index element={<List />} />
        </Route>
        <Route
          path="/toast"
          element={
            <Toast
              title={"Title"}
              description={"Toast description of alert message"}
            />
          }
        />
      </Routes>
    </UserProvider>
  );
}

export default App;
