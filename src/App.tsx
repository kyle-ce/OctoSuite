import React from "react";
import List from "./components/ui/List";
import Login from "./routes/Login";
import { Routes, Route } from "react-router";
import UserProvider from "./UserProvider";
import Toast from "./components/ui/Toast";
import ToastProvider from "./components/ui/Toast/ToastProvider";

function App() {
  return (
    <UserProvider>
      <ToastProvider>
        <Routes>
          <Route path="/" element={<Login />}>
            <Route index element={<List />} />
          </Route>
        </Routes>
      </ToastProvider>
    </UserProvider>
  );
}

export default App;
