import { socials } from "../constants";
import Link from "next/link";
import Marquee from "./Marquee";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative overflow-hidden">
    <Marquee/>
    <section className="bg-[#72e2ff] sm:px-16 px-8 sm:py-24 py-12 bg-cover bg-no-repeat "  style={{ backgroundImage: "url('/bg1.svg')" }}>
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
      <Link href="/">
      {/* <h1 className="text-3xl font-bold text-gray-900 drop-shadow-md">
          ADARSH <span className="text-customGreen">S</span>
        </h1> */}
        <Image src="/logo.png" alt="logo" width={200} height={100} />
      </Link>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <Image src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
      <hr className="border-black mt-2"/>
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">     
        <ul className="flex gap-5 flex-wrap">
            <a
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
            </a>
        </ul>
        <p className="caption text-[#000000] lg:block"> © {new Date().getFullYear()}.Adarsh. All rights reserved. </p>
    </div>
    </section>
    </div>
  );
};

export default Footer;