import React, { useEffect, useState } from "react";
import RepoForm from "./components/Form/DeleteRepoForm";
import Login from "./components/Login";
import { getUser } from "./api/user";
import { Routes, Route, useNavigate } from "react-router";

function App() {
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (token: string) => {
    setIsLoading(true);
    try {
      const {
        data: { login },
      } = await getUser(token);
      if (login) setUser(login);
      console.info("Success retreived ", login, "details");
      navigate("/repo/delete");
    } catch (error) {
      setUser("");
      console.error("bad user data", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex justify-center h-screen">
      <section className="w-full">
        <Routes>
          <Route
            path="/"
            element={<Login isLoading={isLoading} onClick={handleSubmit} />}
          />
          <Route path="/repo/delete" element={<RepoForm user={user} />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
