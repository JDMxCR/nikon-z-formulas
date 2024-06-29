import { SiNikon } from "react-icons/si";
import { BiSolidUserCircle } from "react-icons/bi";
import { Link } from "@nextui-org/react";
const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 text-2xl font-medium text-white bg-gradient-to-br from-yellow-300 to-yellow-500 min-w-80">
      <Link href="/" passHref>
        <SiNikon className="sm:size-16 size-10" />
      </Link>
      <div>
        <img
          className="h-16"
          src=".\src\assets\logo-w.png"
          alt="z formulas logo"
        />
      </div>
      <div>
        <Link href="/login" passHref>
          <BiSolidUserCircle className="sm:size-8 rise-shake" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
