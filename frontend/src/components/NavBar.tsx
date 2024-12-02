import logo from "../assets/logo.webp";

interface Props {
  isDark: boolean;
  setDark: () => void;
}

function NavBar({ isDark, setDark }: Props) {
  return (
    <>
      <nav className="flex items-center justify-between space-x-4">
        <img src={logo} alt="web page logo" className="w-16" />

        <input
          type="text"
          placeholder="Serach Games..."
          className="w-full bg-gray-700 px-3 py-2 rounded"
        />

        <button
          onClick={setDark}
          className={`text-lg ${
            isDark ? "text-gray-300" : "text-gray-800"
          } xl:text-xl`}
        >
          {isDark ? "Set Light" : "Set Dark"}
        </button>
      </nav>
    </>
  );
}

export default NavBar;
