import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Facebook, GitHub, Instagram, LinkedIn } from "./Social";

export default function () {
  return (
    <footer className="w-screen px-20 py-10 mt-10">
      <div className="flex flex-row">
        <div className="flex flex-col w-1/2">
          <div className="flex flex-row">
            <p className="uppercase text-base font-extralight">
              © 2024 sadev kaveesha
            </p>
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <div className="flex flex-row space-x-5 items-center justify-end">
            <Link
              className="hover:text-gray-500 transition"
              href={GitHub}
              target="_blank"
            >
              <GitHubIcon />
            </Link>
            <Link
              className="hover:text-blue-500 transition"
              href={Facebook}
              target="_blank"
            >
              <FacebookIcon />
            </Link>
            <Link
              className="hover:text-pink-500 transition"
              href={Instagram}
              target="_blank"
            >
              <InstagramIcon />
            </Link>
            <Link
              className="hover:text-blue-500 transition"
              href={LinkedIn}
              target="_blank"
            >
              <LinkedInIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
