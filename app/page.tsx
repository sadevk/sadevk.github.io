import Image from "next/image";
import ME from "./assets/me.webp";

export default function Home() {
  return (
    <div className="translate-y-28 flex flex-row px-20">
      <div className="flex flex-col w-full">
        <div className="flex flex-row py-20">
          <div className="flex flex-col w-1/2 space-y-10">
            <div className="text-9xl font-semibold uppercase leading-snug flex flex-col">
              <span className="text-white">Sadev</span>
              <span className=" text-gray-500">Kaveesha</span>
            </div>
            <div className="text-2xl font-semibold uppercase flex flex-row space-x-5">
              <span>Software Engineer</span>
              <span>|</span>
              <span>Entrepreneur</span>
            </div>
          </div>
          <div className="flex flex-col w-1/2 justify-center items-end">
            <Image
              src={ME}
              height={100}
              width={400}
              alt="Me"
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
