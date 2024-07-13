import { SiNikon } from "react-icons/si";
import { BiSolidUserCircle } from "react-icons/bi";
import logo from "../assets/logo-w.png";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 text-2xl font-medium text-white bg-gradient-to-br from-yellow-300 to-yellow-500 min-w-80">
      <SiNikon className="sm:size-16 size-10" />
      <div>
        <img className="h-16" src={logo} alt="z formulas logo" />
      </div>
      <div>
        <BiSolidUserCircle className="sm:size-8 rise-shake" />
      </div>
    </nav>
  );
};

export default NavBar;
