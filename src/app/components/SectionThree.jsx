import React from "react";

export default function SectionThree() {
  return (
    <div className="container mx-auto flex justify-around items-center">
      <div className="">
        <h1 className="text-[Outfit-Regular] text-[32px] leading-[36.8px] text-[#000000] mb-10 ">Why Choose Transfective ?</h1>
        <div className="border border-blue-200 p-6 rounded-xl">
            <h2 className="text-[#39B296] text-[Quicksand] text-[24px] leading-[18px] mb-5 rounded-xl">Decades of Expertise</h2>
            <p className="text-[Roboto-Regular] text-[16px] leading-[24px] text-[#121212]">Leverage our vast array of specialized resources and over 14 years of experience in managing
            intricate training programs.</p>
        </div>
        <div className="border rounded-xl border-gray-300 p-6 mt-2 ">
            <h2 className="text-[#39B296] text-[Quicksand] text-[24px] leading-[18px] mb-5">Comprehensive Discovery</h2>
        </div>
        <div className="border border-gray-300 p-6 mt-2 rounded-xl ">
            <h2 className="text-[#39B296] text-[Quicksand] text-[24px] leading-[18px] mb-5">Streamlined Solutions</h2>
        </div>
        <div className="border border-gray-300 p-6 mt-2 rounded-xl">
            <h2 className="text-[#39B296] text-[Quicksand] text-[24px] leading-[18px] mb-5">Unmatched Quality</h2>
        </div>
        <div className="border border-gray-300 p-6 mt-2 rounded-xl">
            <h2 className="text-[#39B296] text-[Quicksand] text-[24px] leading-[18px] mb-5">Reliable Timeliness</h2>
        </div>
      </div>
      <div>
        <img src="/images/Search.png" className="w-[452px] h-[301px]" alt="" />
      </div>
    </div>
  );
}
