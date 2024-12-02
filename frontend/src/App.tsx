import { useState } from "react";
import NavBar from "./components/NavBar";
import GameList from "./components/gamehub/GameList";
import CategoryList from "./components/gamehub/CategoryList";

function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={`h-screen ${dark ? "bg-gray-800" : "bg-gray-100"}`}>
      <header className="px-8 py-12">
        <NavBar isDark={dark} setDark={() => setDark(!dark)} />
      </header>

      <main className="lg:grid lg:grid-cols-8">
        <section className="px-4 py-2 hidden lg:flex">
          <CategoryList isDark={dark} />
        </section>
        <section className="col-span-7 px-4 py-2">
          <GameList isDark={dark} />
        </section>
      </main>
    </div>
  );
}

export default App;
