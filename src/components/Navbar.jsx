import Searchbox from "./Searchbox";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="bg-slate-100 border-gray-200 dark:bg-gray-800">
      <div className="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto p-4">
        <Logo />
        <Searchbox />
      </div>
    </nav>
  );
}

export default Navbar;
