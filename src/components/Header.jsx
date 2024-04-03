import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";
import { MdVideoLibrary } from "react-icons/md";

const Header = () => {
  const navigate = useNavigate();
  //form gonderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    //aratilacak metni al
    const text = e.target[0].value;

    //metin bossa fonksiyonu durdur
    if (text.trim() === "") {
      return;
    }

    //kullaniciyi arama sonuclari sayfasina yonlendir
    navigate(`/results?search_query=${text}`);
  };

  return (
    <header className="flex justify-between items-center p-4 ">
      <Link className="flex items-center gap-2" to="/ ">
        <img className="w-[50px]" src="/Youtube_logo.png" alt="Logo" />
        <h1 className="text-2xl hidden md:block font-mono">Youtube</h1>
      </Link>

      <form
        onSubmit={handleSubmit}
        className="group flex border border-gray-400 rounded-[20px] overflow-hidden"
      >
        <input
          placeholder="Ara.."
          type="text"
          className="group-hover:border-blue-500 group-hover:border bg-black text-white px-6 py-2 outline-none rounded-l-[20px] border-transparent focus:border-blue-500"
        />
        <button className="border-l px-4 text-2xl bg-zinc-800 ">
          <IoIosSearch />
        </button>
      </form>

      <div className="flex gap-3 text-xl cursor-pointer">
        <FaBell className="hover:text-gray-400 transition duration-[250ms]" />
        <IoVideocam className="hover:text-gray-400 transition duration-[250ms]" />
        <MdVideoLibrary className="hover:text-gray-400 transition duration-[250ms]" />
      </div>
    </header>
  );
};

export default Header;
