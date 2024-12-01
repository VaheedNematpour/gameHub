interface Props {
  isDark: boolean;
  setDark: () => void;
}

function NavBar({ isDark, setDark }: Props) {
  return (
    <>
      <nav className="flex items-center justify-between">
        <h1>Gamehub</h1>

        <button onClick={setDark}>{isDark ? "Set Light" : "Set Dark"}</button>
      </nav>
    </>
  );
}

export default NavBar;
