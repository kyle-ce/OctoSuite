import React from "react";
import List from "./components/ui/List";
import Login from "./routes/login";
import { Routes, Route } from "react-router";
import UserProvider from "./contexts/UserProvider";
import ToastProvider from "./contexts/ToastProvider";

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
