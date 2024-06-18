import { SiNikon } from "react-icons/si";
import { BiSolidUserCircle } from "react-icons/bi";
const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 text-2xl font-medium text-white bg-gradient-to-br from-yellow-300 to-yellow-500 min-w-80">
      <div>
        <SiNikon className="sm:size-16 size-10" />
      </div>
      <div>
        <h1 className="sm:text-5xl dm-mono-medium">Z formulas</h1>
      </div>
      <div>
        <BiSolidUserCircle className="sm:size-8 rise-shake" />
      </div>
    </nav>
  );
};

export default NavBar;
