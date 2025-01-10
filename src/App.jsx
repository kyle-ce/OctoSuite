import { useState } from "react";
import RepoForm from "./components/RepoForm";

function App() {
  return (
    <main className="flex justify-center items-center h-screen">
      <section className="max-w-[1500px]  ">
        <RepoForm />
      </section>
    </main>
  );
}

export default App;
