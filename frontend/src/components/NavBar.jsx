import { SiToptal, SiNikon } from "react-icons/si";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between p-5 text-2xl font-medium text-white min-w-80 bg-gradient-to-br from-yellow-300 to-yellow-500">
      <div>
        <SiNikon className="sm:size-16 size-10" />
      </div>
      <div>
        <h1 className="italic font-black sm:text-4xl">Z-formulas</h1>
      </div>
      <div>
        <SiToptal className="sm:size-8 rise-shake" />

        {/* <button className="px-4 py-2 mx-1 text-xl align-middle bg-transparent rounded-xl">
          sign in
        </button>
        <button className="px-4 py-2 mx-1 text-xl align-middle bg-transparent rounded-xl hover:bg-white">
          log in
        </button> */}
      </div>
    </nav>
  );
};

export default NavBar;
