import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function NewPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white relative">
      {/* Left Section (60%) */}
      <div className="lg:w-3/5 p-8 flex flex-col justify-center relative z-10">
        {/* Heading */}
        <h1 className="text-[36px] font-bold uppercase text-[#222222]">
          LOREM IPSUM DOLOR SIT <br />
          AMET CONSECTETUR. <br />
          DIGNISSIM TELLUS.
        </h1>

        {/* Paragraph */}
        <p className="text-[18px] text-[#222222] mt-6">
          Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit
          laoreet urna sapien quam pulvinar. Dolor aliquet est tortor tincidunt
          ultricies feugiat mauris. Aliquam platea turpis porta nisl felis.
          Massa in facilisis semper libero eget eu quisque bibendum platea.
          Tortor fames.
        </p>

        {/* Button */}
        <button className="bg-[#0546D2] text-white px-6 py-2 rounded-lg font-semibold mt-6 hover:bg-[#1959AC] transition-colors flex items-center gap-2 max-w-[200px]">
          Learn More <ArrowRight size={20} />
        </button>

        {/* Card with increased height */}
        <div className="mt-2 w-full h-[calc(100vh-400px)] bg-white shadow-lg rounded-t-lg p-6 z-20">
          <h2 className="text-[24px] font-bold text-[#222222] mb-4">
            Card Title
          </h2>
          <p className="text-[16px] text-[#555555]">
            Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit
            laoreet urna sapien quam pulvinar. Dolor aliquet est tortor tincidunt
            ultricies feugiat mauris.
          </p>
        </div>
      </div>

      {/* Right Section (40%) - Image */}
      <div className="lg:w-2/5 flex items-start justify-center">
        <Image
          src="/scooty.png" // Replace with your image source
          alt="Scooty"
          width={400}
          height={400}
          className="object-cover"
        />
      </div>

      {/* Gradient Line at the Bottom */}
      <div className="absolute bottom-10 left-0 w-full h-[8px] bg-gradient-to-r from-blue-500 via-green-500 to-black"></div>
    </div>
  );
}