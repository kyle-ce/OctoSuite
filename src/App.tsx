import React, { useState } from "react";
import RepoForm from "./components/RepoForm";
import Login from "./components/login";
import { getUser } from "./api/user";

function App() {
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = async (token: string) => {
    setIsLoading(true);
    try {
      const {
        data: { login },
      } = await getUser(token);
      if (login) setUser(login);
      console.info("Success retreived ", login, "details");
    } catch (error) {
      console.error("bad user data", error);
    }
    setIsLoading(false);
  };
  return (
    <main className="flex items-center justify-center h-screen">
      <section className="max-w-[1500px]  ">
        <Login onClick={handleClick} />
        <RepoForm
          user={user || "Authenticate yourself"}
          isLoading={isLoading}
        />
      </section>
    </main>
  );
}

export default App;
