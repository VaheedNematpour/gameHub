import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`h-screen ${dark ? "bg-gray-800" : "bg-gray-100"}`}>
      <header className="px-8 py-12"></header>
      <main></main>
    </div>
  );
}

export default App;
