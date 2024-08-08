import Image from "next/image";
import ABOUTIMG from "../assets/pic.webp";
import WEB from "../assets/web.webp";
import PC from "../assets/pc.webp";
import MOBILE from "../assets/mobile.webp";
import Link from "next/link";

export default function About() {
  return (
    <div className="translate-y-28 flex flex-row px-20">
      <div className="flex flex-col w-full">
        <div className="flex flex-row py-20">
          <div className="flex flex-col w-2/3 space-y-10">
            <span className="text-8xl uppercase leading-snug flex flex-col font-bold">
              About Me!
            </span>
            <p className="text-xl leading-relaxed text-justify font-extralight hidden">
              Hey there! I'm Sadev, your go-to guy for all things tech and
              entrepreneurial wizardry. I'm a software engineer spinning code
              into magic, and a car-loving, metalhead extraordinaire. When I'm
              not dreaming up the next big thing in tech, you'll find me revving
              engines, rocking out to some heavy riffs, or contemplating life's
              big questions (like why the coffee always runs out too soon). I’m
              the kind of guy who thinks there’s no problem a little bit of
              thinking, a coffee, and a killer playlist can’t fix. So, buckle up
              and join me on this wild ride of innovation, adventure, and a
              whole lot of gear shifts!
            </p>
            <p className="text-xl leading-relaxed text-justify font-extralight">
              Hi, I’m Sadev — an introverted software engineer with a love for
              fast cars, heavy metal, and the kind of deep thinking that usually
              ends with me fixing something, whether it’s a piece of code or a
              stubborn household appliance. As an entrepreneur, I’m constantly
              chasing the next big idea, blending my passion for science,
              machines, and fiction into everything I do. My days are spent
              engineering solutions and my nights are filled with dreams of
              futuristic worlds, all while cranking up some classic metal riffs.
              I’m the kind of person who sees every problem as a puzzle to be
              solved and every challenge as a chance to innovate, all with a bit
              of humor and a lot of curiosity. If you’re into mixing creativity
              with practicality, and maybe a little bit of headbanging along the
              way, then we’ll get along just fine.
            </p>
          </div>
          <div className="flex flex-col w-1/3 justify-end items-end h-full">
            <Image src={ABOUTIMG} height={300} width={400} alt="me" />
          </div>
        </div>
        <div className="flex flex-row pb-20">
          <div className="flex flex-col w-full space-y-10">
            <span className="text-6xl uppercase leading-snug flex flex-col font-bold">
              WHAT I DO?
            </span>
            <div className="flex flex-row space-x-20">
              <div className="flex flex-col space-y-10">
                <span className="text-xl uppercase leading-snug flex flex-col hover:text-gray-400 transition font-semibold cursor-pointer">
                  develop web apps
                </span>
                <Image src={WEB} height={300} width={500} alt="me" />
                <span className="text-lg uppercase leading-snug flex flex-col">
                  I USE:
                </span>
                <ul className="list-disc px-20">
                  <li>REACT</li>
                  <li>NEXTJS</li>
                  <li>PHP</li>
                </ul>
              </div>
              <div className="flex flex-col space-y-10">
                <span className="text-xl uppercase leading-snug flex flex-col hover:text-gray-400 transition font-semibold cursor-pointer">
                  develop mobile apps
                </span>
                <Image src={MOBILE} height={300} width={500} alt="me" />
                <span className="text-lg uppercase leading-snug flex flex-col">
                  I USE:
                </span>
                <ul className="list-disc px-20">
                  <li>REACT-NATIVE</li>
                  <li>FLUTTER</li>
                  <li>KOTLIN</li>
                  <li>SWIFT</li>
                </ul>
              </div>
              <div className="flex flex-col space-y-10">
                <span className="text-xl uppercase leading-snug flex flex-col hover:text-gray-400 transition font-semibold cursor-pointer">
                  develop DESKTOP apps
                </span>
                <Image src={PC} height={300} width={500} alt="me" />
                <span className="text-lg uppercase leading-snug flex flex-col">
                  I USE:
                </span>
                <ul className="list-disc px-20">
                  <li>JAVA</li>
                  <li>SWIFT</li>
                  <li>C#</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row pb-20">
          <div className="flex flex-col w-full space-y-10">
            <span className="text-6xl uppercase leading-snug flex flex-col font-bold">
              education
            </span>
            <div className="flex flex-row space-x-20">
              <div className="flex flex-col space-y-5 px-10">
                <div className="flex flex-row">
                  <div className="flex flex-col space-y-2 text-xl leading-snug font-semibold uppercase">
                    <span>went to d.s. senanayake college colombo 07</span>
                    <span className="text-gray-400">2013 - 2022</span>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="flex flex-col space-y-2 text-xl leading-snug font-semibold uppercase">
                    <span>
                      completed foundation in engineering at{" "}
                      <Link
                        href="https://icbt.lk/"
                        className="underline hover:text-gray-300 transition"
                      >
                        ICBT Campus
                      </Link>{" "}
                      sri lanka
                    </span>
                    <span className="text-gray-400">2021 - 2022</span>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="flex flex-col space-y-2 text-xl leading-snug font-semibold uppercase">
                    <span>
                      studies full stack software engineering at{" "}
                      <Link
                        href="https://www.javainstitute.edu.lk/"
                        className="underline hover:text-gray-300 transition"
                      >
                        Java Institute of advanced technology
                      </Link>{" "}
                      sri lanka
                    </span>
                    <span className="text-gray-400">2022 - 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row pb-20">
          <div className="flex flex-col w-full space-y-10">
            <span className="text-6xl uppercase leading-snug flex flex-col font-bold">
              experience
            </span>
            <div className="flex flex-row space-x-20">
              <div className="flex flex-col space-y-5 px-10">
                <div className="flex flex-row">
                  <div className="flex flex-col space-y-2 text-xl leading-snug font-semibold uppercase">
                    <span>CEO | Co-Founder</span>
                    <span className="text-gray-400">
                      2023 - present |{" "}
                      <Link
                        href="https://intenholdings.com/"
                        className="underline"
                      >
                        INTEN HOLDINGS (PVT) LTD
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="flex flex-col space-y-2 text-xl leading-snug font-semibold uppercase">
                    <span>DEVELOPER</span>
                    <span className="text-gray-400">
                      2023 - present |{" "}
                      <Link href="https://enviiz.com/" className="underline">
                        ENVIIZ SOFTWARES (PVT) LTD
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="flex flex-col space-y-2 text-xl leading-snug font-semibold uppercase">
                    <span>Associate Research Engineer</span>
                    <span className="text-gray-400">
                      2024 - present |{" "}
                      <Link
                        href="https://www.javainstitute.edu.lk/"
                        className="underline"
                      >
                        Java Institute for Advanced Technology
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
