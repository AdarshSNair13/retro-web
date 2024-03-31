const Projects = () => {
    return (
      <div className="px-5 py-14 md:px-10 md:py-24 2xl:px-5 bg-[url('../public/images/bg.webp')] bg-no-repeat bg-cover bg-center md:bg-none xl:bg-[url('../public/images/bg.webp')]">
        <div className="bg-[#f84d72] mt-12 py-12 text-center border-4 border-black drop-shadow-md rounded-2xl bg-cover bg-no-repeat "  style={{ backgroundImage: "url('/bg2.svg')" }}>
          <h1 className="uppercase text-5xl md:text-7xl text-center text-white text-outline drop-shadow-md font-bold">
            See my latest work
          </h1>
          <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:gap-20 p-10">
            {[
              { imgSrc: "/images/p2.png", link: "https://xite-live-assignment-theta.vercel.app/" },
              { imgSrc: "/images/p3.png", link: "https://www.higbec.com/" },
              { imgSrc: "/images/p1.png", link: "https://www.arcadiahomes.co.in/" }
            ].map((item, index) => (
              <article key={index} className="filter drop-shadow-md hover:bg-customGreen items-center gap-5 rounded-2xl border-4 border-black bg-white p-8 transition-all hover:scale-105">
                <a className="flex h-full flex-col justify-between" href={item.link} target="_blank" rel="noopener noreferrer">
                  <div className="flex flex-col gap-3 hover:no-underline">
                    <img className="filter drop-shadow-md w-full rounded-2xl border border-black" src={item.imgSrc} alt="" />
                    <div></div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;
  