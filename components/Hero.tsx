import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="px-5 py-14 md:px-10 md:py-24 2xl:px-5 bg-no-repeat bg-cover bg-center
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
            className="uppercase hover:no-underline transition-all hover:scale-105 border-black border drop-shadow-solid rounded-full px-8 py-4  mt-8  bg-customGreen font-semibold drop-shadow-md-custom"
            href=""
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
                <div className="absolute -right-4 -top-4 lg:-right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="15"
                    fill="none"
                  >
                    <path
                      fill="#763EFC"
                      stroke="#111"
                      stroke-linejoin="round"
                      d="M12 1 1 7.5 6.5 9l3 5.5L12 1Z"
                    ></path>
                  </svg>
                </div>
                <div className="whitespace-nowrap bg-customGreen px-5 py-2 text-left">
                  <p className="text-sm font-medium text-black">
                    Front-end Developer
                  </p>
                </div>
              </div>
              <div className="animate animate-secondCursor sm:animate-greenCursor absolute bottom-8 right-12 sm:bottom-28 sm:right-12">
                <div className="absolute -left-4 -top-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="13"
                    fill="none"
                  >
                    <path
                      fill="rgb(178, 255, 68)"
                      stroke="#111"
                      stroke-linejoin="round"
                      d="m1 1 6.5 11L9 6.5l5.5-3z"
                    ></path>
                  </svg>
                </div>
                <div className="whitespace-nowrap bg-customGreen px-2 py-2">
                  <p className="text-sm font-medium text-neutral-900">
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
