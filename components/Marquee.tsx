import React from "react";

const Marquee: React.FC = () => {
  const marqueeText: string = "Let's work together";
  const spans: JSX.Element[] = Array(5)
    .fill(undefined)
    .map((_, index) => (
      <span key={index} className="text-4xl mx-4 text-black font-semibold">
        {marqueeText} ✌️
      </span>
    ));

  return (
    <div className="flex h-[7rem] items-center overflow-hidden border-4 border-neutral-900 bg-customGreen ">
      <div className="py-12 animate-marquee whitespace-nowrap">{spans}</div>
      <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
        {spans}
      </div>
    </div>
  );
};

export default Marquee;
