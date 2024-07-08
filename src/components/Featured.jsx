import React from "react";

function Featured() {
  return (
    <div className="w-full py-20">
      <div className="w-full  px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-6xl  tracking-tight font-[]Neue Montreal">
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-6 mt-10">
          <div className="cardContainer w-1/2 h-[75vh] relative">
            <h1 className=" -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] absolute left-full z-[9] leading-none tracking-tighter text-8xl">
              {"FYDE".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="Image Here"
              />
            </div>
          </div>
          <div className="cardContainer w-1/2 h-[75vh] relative">
            <h1 className=" translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] absolute right-full z-[9] leading-none tracking-tighter text-8xl">
              {"VICE".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt="Image Here"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
