import { SiNikon } from "react-icons/si";
import { BiSolidUserCircle } from "react-icons/bi";
const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 text-2xl font-medium text-white bg-gradient-to-br from-yellow-300 to-yellow-500 min-w-80">
      <div>
        <SiNikon className="sm:size-16 size-10" />
      </div>
      <div>
        <img
          className="h-20"
          src=".\src\assets\logo-w.png"
          alt="z formulas logo"
        />
      </div>
      <div>
        <BiSolidUserCircle className="sm:size-8 rise-shake" />
      </div>
    </nav>
  );
};

export default NavBar;
