import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function NewPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Main Content */}
      <div className="flex flex-1">
        {/* Left Section - Image */}
        <div className="w-1/2 flex items-start pr-[20px]">
          {/* Reduced right padding */}
          <Image
            src="/twomen.png"
            alt="Two Men"
            width={600}
            height={800}
            className="h-[85vh] w-auto object-cover"
          />
        </div>

        {/* Right Section - Content */}
        <div className="w-1/2 flex flex-col justify-center pl-[20px]">
          {/* Reduced left padding */}
          {/* Subheading */}
          <h2 className="text-[#0546D2] text-[24px] font-semibold font-['Inter'] tracking-[-0.02em]">
            Lorem ipsum
          </h2>

          {/* Heading with first letter in blue */}
          <h1 className="text-[42px] font-bold font-['Roboto_Condensed'] tracking-[-0.02em] leading-tight">
            <span className="text-[#0546D2]">Lorem</span> ipsum dolor sit amet
            consectetur. <br /> Enim donec.
          </h1>

          {/* Paragraph */}
          <p className="text-[20px] font-semibold font-['Inter'] text-[#222222] mt-3 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Vel pellentesque <br /> odio
            enim amet non.
          </p>

          {/* Two Column List */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-2 mt-4">
            {/* Reduced column gap */}
            <p className="text-[20px] font-semibold">Lorem Ipsum</p>
            <p className="text-[20px] font-semibold">Lorem Ipsum</p>
            <p className="text-[20px] font-semibold">Lorem Ipsum</p>
            <p className="text-[20px] font-semibold">Lorem Ipsum</p>
            <p className="text-[20px] font-semibold">Lorem Ipsum</p>
            <p className="text-[20px] font-semibold">Lorem Ipsum</p>
          </div>

          {/* Button with smaller width */}
          <button className="mt-6 flex items-center gap-2 bg-[#0546D2] hover:bg-[#1959AC] text-white px-4 py-2 rounded-lg text-[16px] font-semibold transition-colors duration-300 w-fit">
            Lorem Ipsum <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Gradient Separator */}
      <div className="w-full h-[10px] bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 mt-5"></div>
    </div>
  );
}