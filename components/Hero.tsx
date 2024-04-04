import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="px-5 py-24 md:px-10 2xl:px-5 bg-no-repeat bg-cover bg-center
    bg-[url('../public/images/bg.webp')]
    md:bg-none
    xl:bg-[url('../public/images/bg.webp')]"
    >
      <div
        className="bg-[#72e2ff] mt-12 py-24 flex items-center justify-center border-4 border-black drop-shadow-md rounded-2xl bg-cover bg-no-repeat "
        style={{ backgroundImage: "url('/bg1.svg')" }}
      >
        <div className="flex flex-col items-center">
          <h1 className="font-bold drop-shadow-md-custom text-center text-5xl uppercase leading-tight md:text-8xl 2xl:text-9xl text-black">
            Hi I&apos;am
            <span className="bg-[#fe68c8] drop-shadow-md m-3 inline-block -rotate-3 rounded-full border border-black px-12 py-3 text-white">
              Adarsh
            </span>
          </h1>
          <p className="mt-8 w-full text-center md:w-3/4">
            I&apos;m a software engineer, <br />
            specializing in JavaScript, React, Next, TypeScript,Tailwind ,figma
            and Web Performance.
          </p>
          <a
            className="uppercase hover:no-underline transition-all hover:scale-105 border-black border drop-shadow-solid rounded-full px-8 py-4 mt-8  bg-customGreen font-semibold drop-shadow-md-custom"
            href="/about"
          >
            Read More
          </a>
          <div className="relative col-span-5 col-start-8 mt-10 sm:mt-14 lg:mt-0 py-10">
            <div className="rounded-t-[20.625rem] border-4 border-black shadow-2xl transition-shadow g-no-repeat bg-cover bg-center bg-[url('../public/images/bg.webp')] md:bg-none xl:bg-[url('../public/images/bg.webp')]">
              <img
                alt="profile Pic"
                width="960"
                height="1160"
                decoding="async"
                data-nimg="1"
                className="rounded-t-[20.625rem]"
                sizes="100vw"
                src="/1.png"
                style={{ color: "transparent", width: "100%", height: "auto" }}
              />
              <div className="animate-firstCursor absolute bottom-72 sm:-left-10 sm:bottom-96">
                <div className="whitespace-nowrap bg-[#f84d72] px-5 py-2 text-left">
                  <p className="text-sm font-medium text-[#ffffff]">
                    Front-end Developer
                  </p>
                </div>
              </div>
              <div className="animate animate-secondCursor sm:animate-greenCursor absolute bottom-8 right-12 sm:bottom-28 sm:right-12">
                <div className="whitespace-nowrap bg-[#f84d72] px-2 py-2">
                  <p className="text-sm font-medium text-[#ffffff]">
                    Ui/Ux Designer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
