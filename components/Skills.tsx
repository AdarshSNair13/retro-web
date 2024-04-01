import Image from "next/image";

const Skills = () => {
  return (
    <div
      className="px-5 bg-no-repeat bg-cover bg-center
    bg-[url('../public/images/bg.webp')]
    xl:bg-[url('../public/images/bg.webp')]"
    >
      <div className="bg-yellow-neon py-12 text-center border-4 border-black drop-shadow-md rounded-2xl bg-cover bg-no-repeat "  style={{ backgroundImage: "url('/bg1.svg')" }}>
        <h1 className="uppercase text-5xl md:text-7xl text-center text-white text-outline drop-shadow-md font-bold">
          Download My Resume
        </h1>
        <div className="m-10">
        <a
          className="uppercase hover:no-underline transition-all hover:scale-105 border-black border drop-shadow-solid rounded-full px-8 py-4 bg-[#f84d72] font-semibold drop-shadow-md-custom text-white"
          href="/AdarshSNair.pdf"
          target="_blank"
        >
          Resume
        </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;
