import { NAV_LINKS } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="right-0 left-0 flex items-center justify-between mx-auto px-6 lg:px-20 3xl:px-0 fixed z-30 py-5 top-0 border-neutral-200/70 bg-neutral-50/80 backdrop-blur-md border-b">
      <Link href="/">
        <h1 className="text-3xl font-semibold text-gray-900">
          ADARSH <span className="text-customGreen">S</span>
        </h1>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        <Link
          href=""
          className="regular-16 text-[#000000] font-semibold flex items-center justify-center cursor-pointer pb-1.5 uppercase relative"
        >
          Home
          <div className="absolute ml-1 h-2 w-2 rounded-full bg-green-300 bottom-0" />
        </Link>
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-500 flex items-center justify-center cursor-pointer pb-1.5 uppercase"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flex items-center justify-center hidden">
        <a
          className="uppercase hover:no-underline transition-all hover:scale-105 border-black border drop-shadow-solid rounded-full px-8 py-4 bg-customGreen font-semibold drop-shadow-md-custom"
          href=""
        >
          Let's chat
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
