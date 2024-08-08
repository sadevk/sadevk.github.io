import Image from "next/image";
import LOGO from "../assets/logo-black.png";
import Link from "next/link";

export default function () {
  return (
    <header className="w-screen p-10 fixed z-50">
      <div className="bg-white/60 py-4 text-black ps-10 pe-20 text-xl flex rounded-2xl flex-row justify-between items-center">
        <div className="flex flex-col">
          <Link href={"./"}>
            <Image src={LOGO} height={60} width={60} alt="Sadev Kaveesha" />
          </Link>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row space-x-10 uppercase font-bold">
            <Link className="hover:text-black/60 transition" href={"#about"}>
              <span>Projects</span>
            </Link>
            <Link className="hover:text-black/60 transition" href={"/about"}>
              <span>About Me</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
