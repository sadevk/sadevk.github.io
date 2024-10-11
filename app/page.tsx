import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main className="w-screen">
      <div className="w-full flex md:flex-row flex-col h-screen" id="home">
        <div className="flex flex-col items-center justify-center w-full">
          <iframe
            src="https://lottie.host/?file=d5fee8e3-8309-40e6-878f-f4c7adf7fc90/GalFsvTskB.lottie"
            className="md:w-[600px] md:h-[600px] w-96 h-96"
          ></iframe>
          <h1 className="md:text-3xl text-xl">
            Hi! I&apos;m Sadev, Welcome to my Page!
          </h1>
        </div>
      </div>
      <div
        className="w-full flex md:flex-row flex-col md:p-20 p-10 md:h-screen"
        id="about"
      >
        <div className="md:w-1/3 p-10 flex justify-center items-center h-full">
          <img
            src="../assets/dp.jpg"
            alt="Sadev Kaveesha(MySelf)"
            className="rounded-3xl"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-10 md:w-2/3 py-5">
          <h1 className="md:text-6xl text-3xl md:mb-10">WHO AM I?</h1>
          <p className="text-lg text-justify">
            Hello! I&apos;m Sadev Kaveesha, a seasoned Software Developer with
            two years of industry experience. I specialize in a diverse range of
            technologies and possess strong organizational and management
            skills.
          </p>
          <p className="text-lg text-justify">
            With a passion for crafting innovative solutions, I have honed my
            skills in various programming languages, including PHP, MySQL, HTML,
            CSS, JAVA, C#, React Native, React JS, Next JS, and JavaScript. My
            expertise extends across Mobile App Development, Web Application,
            and Desktop Application Development.
          </p>
        </div>
      </div>
      <div
        className="w-full flex md:flex-row flex-col md:p-20 p-10 md:h-screen"
        id="services"
      >
        <div className="flex flex-col items-center justify-center gap-10 py-5">
          <div className="w-full flex justify-center items-center">
            <h1 className="md:text-6xl text-3xl md:mb-10">
              WHAT SERVICES DO I OFFER?
            </h1>
          </div>
          <div className="flex gap-5 md:flex-row flex-col">
            <div className="md:w-1/3 flex flex-col gap-5 p-10 shadow shadow-white rounded-3xl hover:-translate-y-2 transition">
              <h1 className="md:text-2xl text-xl">
                Mobile Application Development
              </h1>
              <img src="../assets/mobile.png" alt="Mobile Development" />
              <p className="text-justify">
                Transform your ideas into functional and user-friendly mobile
                applications. From concept to deployment, I bring your vision to
                life on various platforms, including React Native, flutter and
                native frameworks.
              </p>
            </div>
            <div className="md:w-1/3 flex flex-col gap-5 p-10 shadow shadow-white rounded-3xl hover:-translate-y-2 transition">
              <h1 className="md:text-2xl text-xl">Web Development</h1>
              <img src="../assets/web.png" alt="Web Development" />
              <p className="text-lg text-justify">
                Create dynamic and engaging web applications tailored to your
                specific needs. Utilizing the latest web technologies such as
                NextJS, I design and develop responsive solutions that enhance
                user experiences.
              </p>
            </div>
            <div className="md:w-1/3 flex flex-col gap-5 p-10 shadow shadow-white rounded-3xl hover:-translate-y-2 transition">
              <h1 className="md:text-2xl text-xl">
                Desktop Application Development
              </h1>
              <img
                src="../assets/pc.png"
                alt="Desktop Application Development"
              />
              <p className="text-lg text-justify">
                For projects requiring desktop solutions, I offer expertise in
                crafting powerful and intuitive applications that meet the
                unique requirements of your business or project for Windows,
                Mac, Linux or any other platform.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex md:flex-row flex-col md:p-20 p-10 md:h-screen">
        <div className="md:w-1/3 p-10 flex justify-center items-center h-full">
          <iframe
            src="https://lottie.host/?file=e55e4b6f-e662-4a43-90c5-52591bcdf712/s8ZoznAIP1.lottie"
            className="md:h-[600px] md:w-[600px] h-96 w-96"
          ></iframe>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 md:w-2/3 py-5">
          <h1 className="md:text-6xl text-3xl md:mb-10">
            LET&apos;S COLLABORATE
          </h1>
          <p className="text-lg text-justify">
            Whether you&apos;re a business looking to enhance your digital
            presence or an entrepreneur with a groundbreaking idea, I am ready
            to collaborate. Let&apos;s turn your concepts into reality through
            strategic and innovative software development.
          </p>
          <p className="text-lg text-justify">
            Feel free to explore my portfolio to witness the range and quality
            of projects I&apos;ve undertaken. If you&apos;re ready to embark on
            a development journey, let&apos;s connect! I look forward to
            bringing your ideas to life.
          </p>
          <h1 className="md:text-3xl text-xl md:my-10">REACH ME</h1>
          <div className="flex md:flex-row flex-col gap-5" id="contact">
            <div className="flex gap-5">
              <a
                href="http://wa.me/94775500325"
                className="flex flex-col justify-center items-center gap-5 hover:no-underline border p-5 rounded-xl hover:font-bold w-44 h-32"
              >
                <img
                  src="https://static.whatsapp.net/rsrc.php/v3/yz/r/ujTY9i_Jhs1.png"
                  className="h-10 w-10"
                />
                <p>WhatsApp</p>
              </a>
              <a
                href="https://www.facebook.com/sadevkaveesha.lk"
                className="flex flex-col justify-center items-center gap-5 hover:no-underline border p-5 rounded-xl hover:font-bold w-44 h-32"
              >
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/eFZD1KABzRA.png?_nc_eui2=AeGhclU00XYniIn_ujF1FbKhcQu7EDYlHPVxC7sQNiUc9S_cEyfvE0KvUhSFjOS_a6WDrXtWxg1HoenDCd6LjJXV"
                  className="h-10 w-10"
                />
                <p>Facebook</p>
              </a>
            </div>
            <div className="flex gap-5">
              <a
                href="tel:+94775500325"
                className="flex flex-col justify-center items-center gap-5 hover:no-underline border p-5 rounded-xl hover:font-bold h-32 w-44"
              >
                <PhoneIcon className="h-10 w-10" />
                <p>+94 77 5500 325</p>
              </a>
              <a
                href="mailto:hello@sadev.me"
                className="flex flex-col justify-center items-center gap-5 hover:no-underline border p-5 rounded-xl hover:font-bold h-32 w-44"
              >
                <EnvelopeIcon className="h-10 w-10" />
                <p>hello@sadev.me</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <h1 className="my-5 text-gray-500 text-center">
        Sadev Kaveesha &copy; {new Date().getFullYear()}
      </h1>
    </main>
  );
}
