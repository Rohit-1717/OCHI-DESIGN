import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5 ">
      <div className="cardcontainer w-1/2 h-[55vh] ">
        <div
          card
          className="bg-[#004D43] relative w-full h-full flex items-center justify-center rounded-xl"
        >
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="Images Here!!"
          />
          <button className="absolute px-5 py-1 rounded-full border-[#CDEA68] font-[Neue Montreal] text-[#CDEA68]  border-2 left-10  bottom-10">
            &copy; 2024-2025
          </button>
        </div>
      </div>
      <div className="cardcontainer w-1/2 h-[55vh] flex gap-5">
        <div
          card
          className="bg-[#2e3b2e] relative w-full h-full rounded-xl flex items-center justify-center"
        >
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt="Images Here!!"
          />
          <button className="absolute px-5 py-1 rounded-full border-[#CDEA68] font-[Neue Montreal] text-[#CDEA68]  border-2 left-10 uppercase bottom-10">
            Rating 5.0 clutch
          </button>
        </div>
        <div
          card
          className="bg-[#212121] relative w-full h-full rounded-xl flex items-center justify-center"
        >
          <img
            className="h-[120px] "
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt="Images Here!!"
          />
          <button className="absolute px-5 py-1 rounded-full border-[#CDEA68] font-[Neue Montreal] text-[#CDEA68]  border-2 left-10 uppercase bottom-10">
            Business bootcamp
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
