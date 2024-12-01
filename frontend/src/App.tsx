import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`h-screen ${dark ? "bg-gray-800" : "bg-gray-100"}`}>
      <header className="px-8 py-12">
        <NavBar isDark={dark} setDark={() => setDark(!dark)} />
      </header>
      <main></main>
    </div>
  );
}

export default App;
