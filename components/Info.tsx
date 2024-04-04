import Image from "next/image";
import React from "react";

const Info: React.FC = () => {
  return (
    <div className="px-5 py-24 md:px-10 2xl:px-5 bg-no-repeat bg-cover bg-centerbg-[url('../public/images/bg.webp')] md:bg-none xl:bg-[url('../public/images/bg.webp')]">
      <div
        className="bg-[#72e2ff] mt-12 py-24 flex flex-col items-center ju border-4 border-black drop-shadow-md rounded-2xl bg-cover bg-no-repeat "
        style={{ backgroundImage: "url('/bg1.svg')" }}
      >
        <p className="tracking-[-0.025em] leading-[1.375em] sm:leading-[1.25em] text-[100px] font-medium sm:text-[96px]">
          {" "}
          Hi! there,
        </p>
        <div className="flex items-center justify-between gap-10 max-lg:flex-col">
          <div className="flex flex-1 flex-col pl-12 md:pl-24">
            <p className="text-2xl nx-mt-6 nx-leading-7 first:nx-mt-0">
            Hello! My name is Adarsh S Nair, and I&apos;m passionate about everything JavaScript, web performance/development, and UI/UX design.
            </p>
            <p className="text-2xl nx-mt-6 nx-leading-7 first:nx-mt-0">
            Currently, I&apos;m a Front-end Developer at Xite Live.
            </p>
            <p className="text-2xl nx-mt-6 nx-leading-7 first:nx-mt-0">
            I live in Trivandrum, Kerala, where I spend my free time irritating my babies Lokki🐾 and Luttu🐾, and searching for good coffee and good vibes. One of my favorite things to do is playing cricket and watching movies.
            </p>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <Image
              src="/2.jpg"
              height={400}
              width={400}
              alt="Dummy Image"
              className="rounded-full aspect-square object-cover border-black border-4 transition-shadow hover:shadow-lg group-hover:translate-y-[-0.125rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
