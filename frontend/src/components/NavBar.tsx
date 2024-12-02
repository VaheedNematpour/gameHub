import logo from "../assets/logo.webp";
import { CiDark, CiLight } from "react-icons/ci";

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
          className={`text-xl ${
            isDark ? "text-gray-300" : "text-gray-800"
          } xl:text-2xl`}
        >
          {isDark ? <CiLight /> : <CiDark />}
        </button>
      </nav>
    </>
  );
}

export default NavBar;
