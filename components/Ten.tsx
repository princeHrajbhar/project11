"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function NewPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Main Content */}
      <div className="flex flex-1 flex-col sm:flex-row">
        {/* Left Section - Image */}
        <div className="w-full sm:w-1/2 flex items-start px-4 sm:px-[20px]">
          {/* Reduced right padding */}
          <Image
            src="/twomen.png"
            alt="Two Men"
            width={600}
            height={800}
            className="w-full sm:h-[85vh] object-cover"
          />
        </div>

        {/* Right Section - Content */}
        <div className="w-full sm:w-1/2 flex flex-col justify-center px-4 sm:px-[20px]">
          {/* Subheading */}
          <h2 className="text-[#0546D2] text-[20px] sm:text-[24px] font-semibold font-['Inter'] tracking-[-0.02em]">
            Lorem ipsum
          </h2>

          {/* Heading with first letter in blue */}
          <h1 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold font-['Roboto_Condensed'] tracking-[-0.02em] leading-tight mt-2">
            <span className="text-[#0546D2]">Lorem</span> ipsum dolor sit amet
            consectetur. <br /> Enim donec.
          </h1>

          {/* Paragraph */}
          <p className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold font-['Inter'] text-[#222222] mt-3 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Vel pellentesque <br /> odio
            enim amet non.
          </p>

          {/* Two Column List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-4">
            {/* Reduced column gap */}
            <p className="text-[16px] sm:text-[20px] font-semibold">Lorem Ipsum</p>
            <p className="text-[16px] sm:text-[20px] font-semibold">Lorem Ipsum</p>
            <p className="text-[16px] sm:text-[20px] font-semibold">Lorem Ipsum</p>
            <p className="text-[16px] sm:text-[20px] font-semibold">Lorem Ipsum</p>
            <p className="text-[16px] sm:text-[20px] font-semibold">Lorem Ipsum</p>
            <p className="text-[16px] sm:text-[20px] font-semibold">Lorem Ipsum</p>
          </div>

          {/* Button with smaller width */}
          <button className="mt-6 flex items-center gap-2 bg-[#0546D2] hover:bg-[#1959AC] text-white px-4 py-2 rounded-lg text-[14px] sm:text-[16px] font-semibold transition-colors duration-300 w-fit">
            Lorem Ipsum <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Gradient Separator */}
      <div className="w-full h-[10px] bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 mt-5"></div>
    </div>
  );
}
