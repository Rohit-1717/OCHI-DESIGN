import React from "react";
import { MdArrowOutward } from "react-icons/md";
function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textStructure mt-44 px-20">
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <div className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] -top-[1.2vw] relative bg-green-500"></div>
                )}
                <h1 className="pt-[1.5vw]  uppercase text-[7vw]  leading-[.75] font-['Founders_Grotesk'] font-medium">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-[5vw] flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}

        <div className="start flex items-center gap-2">
          <div className=" border-[1px] rounded-full font-light text-sm uppercase px-8 py-1  border-zinc-500 text-center">
            Start the project
          </div>
          <div className="w-8 h-8 flex items-center rounded-full justify-center border-[1px]  border-zinc-500 ">
            <MdArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
