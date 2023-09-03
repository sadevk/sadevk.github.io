"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center p-5 bg-slate-900 h-screen">
      <div className="bg-slate-100 rounded-3xl shadow-2xl p-5">
        <div className="text-center p-2">
          <h1 className="font-bold text-4xl mb-2">
            Hello! I&apos;m Sadev Kaveesha
          </h1>
          <h1 className="text-2xl mb-2">
            I&apos;m a Software Engineering Student!
          </h1>
          <h1 className="text-lg">I develop softwares in my free time</h1>
        </div>
        <div className="flex p-2">
          <div className="">
            <Image
              src={"/assets/profile.jpg"}
              width={250}
              height={250}
              alt="Sadev Kaveesha"
              className="hover:scale-105 duration-500 shadow-xl rounded-3xl border-2 mb-5"
            />
          </div>
          <div className="p-2 grid auto-cols-max grid-cols-3 items-center">
            <Image
              src={"/assets/css.png"}
              alt="Picture of the author"
              width={64}
              height={64}
              style={{ margin: 5 }}
            />
            <Image
              src={"/assets/html.png"}
              alt="Picture of the author"
              width={64}
              height={64}
              style={{ margin: 5 }}
            />
            <Image
              src={"/assets/java.png"}
              alt="Picture of the author"
              width={64}
              height={64}
              style={{ margin: 5 }}
            />
            <Image
              src={"/assets/js.png"}
              alt="Picture of the author"
              width={64}
              height={64}
              style={{ margin: 5 }}
            />
            <Image
              src={"/assets/mysql.png"}
              alt="Picture of the author"
              width={64}
              height={64}
              style={{ margin: 5 }}
            />
            <Image
              src={"/assets/next.png"}
              alt="Picture of the author"
              width={64}
              height={64}
              style={{ margin: 5 }}
            />
            <Image
              src={"/assets/php.png"}
              alt="Picture of the author"
              width={64}
              height={64}
              style={{ margin: 5 }}
            />
            <Image
              src={"/assets/react.png"}
              alt="Picture of the author"
              width={64}
              height={64}
              style={{ margin: 5 }}
            />
            <Image
              src={"/assets/ts.png"}
              alt="Picture of the author"
              width={64}
              height={64}
              style={{ margin: 5 }}
            />
          </div>
        </div>

        <h1 className="text-center text-lg mb-2">Contact Me</h1>
        <div className="p-2 flex content-center justify-center">
          <Link href={"https://wa.me/94775500325"}>
            <Image
              src={"/assets/whatsapp.png"}
              alt="Picture of the author"
              width={48}
              height={48}
              style={{ marginInline: 5 }}
              className="hover:scale-105 duration-500"
            />
          </Link>
          <Link href={"https://facebook.com/sadevkaveesha.lk"}>
            <Image
              src={"/assets/fb.png"}
              alt="Picture of the author"
              width={48}
              height={48}
              style={{ marginInline: 5 }}
              className="hover:scale-105 duration-500"
            />
          </Link>
          <Link href={"https://www.linkedin.com/in/sadevkaveesha/"}>
            <Image
              src={"/assets/in.png"}
              alt="Picture of the author"
              width={48}
              height={48}
              style={{ marginInline: 5 }}
              className="hover:scale-105 duration-500"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
