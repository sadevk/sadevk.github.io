import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="bg-black p-4 sticky top-0 drop-shadow-xl z-10 content-center justify-center flex">
      <div className="flex justify-between items-center w-2/4">
        <Link href={"/"}>
          <h1 className="text-white text-2xl font-bold hover:text-slate-600 hover:scale-105 duration-500">
            Home
          </h1>
        </Link>
        <Link href={"/about"}>
          <h1 className="text-white text-2xl font-bold hover:text-slate-600 hover:scale-105 duration-500">
            About
          </h1>
        </Link>
        <Link href={"/"}>
          <h1 className="text-white text-2xl font-bold hover:text-slate-600 hover:scale-105 duration-500">
            Projects
          </h1>
        </Link>
        <Link href={"/"}>
          <h1 className="text-white text-2xl font-bold hover:text-slate-600 hover:scale-105 duration-500">
            Contact
          </h1>
        </Link>
      </div>
    </nav>
  );
}
