import { Link } from "react-router-dom";
import { useState } from "react";
import { useSearch } from "../context/SearchContext";

const Header = () => {
  const [isVisible, setisVisible] = useState(false);
  const { searchTerm, setSearchTerm } = useSearch();

  const toggleSearch = () => {
    setisVisible(!isVisible);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex flex-row justify-center items-center h-24 mt-0  bg-green-950 opacity-95 text-center dark:bg-neutral-600 text-amber-200/80 dark:text-neutral-200">
      <Link to={`/`} className="flex justify-center my-5  items-center gap-2">
        <img
          src="logo.svg"
          className="text-3xl max-w-[7rem] font-medium font-serif items-center hover:cursor-pointer"
          alt="lost-place-logo"
        />
      </Link>
      <button
        onClick={toggleSearch}
        className="px-3 py-2 rounded hover:opacity-50 mr-2"
      >
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"
          alt="search"
          className="w-8 h-full"
        />
      </button>
      {isVisible && (
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="search"
          className="p-2 rounded bg-white/20 text-black"
        />
      )}
      <div className="flex flex-row justify-center items-center mt-0 bg-emerald-900 text-center dark:bg-neutral-600 text-amber-200/80 dark:text-neutral-200">
        {/* <Link
        to={`/`}
        className="mb-2 mt-4 text-3xl font-medium items-center hover:cursor-pointer"
      >
      <h1 className="mb-2 mt-4 text-3xl font-medium font-serif items-center  hover:cursor-pointer">
        Lost Place
      </h1>
      </Link> */}
      </div>
      <div></div>
    </div>
  );
};

export default Header;
