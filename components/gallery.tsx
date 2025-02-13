"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function NewPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Section - Sticky Content */}
      <div className="w-2/5 h-screen flex flex-col items-start p-8 sticky top-0 bg-white">
        {/* Subheading */}
        <h2 className="text-[24px] font-semibold tracking-[-0.02em] font-['Inter'] text-[#222222]">
          NO LIMITS
        </h2>
        {/* Heading */}
        <h1 className="text-[42px] font-bold tracking-[-0.02em] font-['Roboto_Condensed'] text-[#222222] mt-1 leading-tight">
          Lorem ipsum dolor sit <br /> amet
        </h1>
        {/* Paragraph */}
        <p className="text-[20px] font-semibold tracking-[-0.02em] font-['Inter'] text-[#222222] mt-2 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. <br />
          Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum <br />
          nullam.
        </p>
        {/* Button */}
        <button className="mt-6 flex items-center gap-2 bg-[#0546D2] hover:bg-[#1959AC] text-white px-4 py-2 rounded-lg text-[20px] font-semibold whitespace-nowrap">
          Loerum Ipsum <ArrowRight size={18} />
        </button>
      </div>

      {/* Right Section - Custom Image Layout */}
      <div className="w-3/5 relative p-4 flex flex-wrap justify-center items-end">
        {/* Image 9 (Bottom-Left Corner) */}
        <div className="absolute bottom-0 left-0">
          <Image src="/gallery9.png" alt="Gallery 9" width={100} height={100} className="object-cover" />
        </div>

        {/* Image 8 (Right of 9, 2x Size) */}
        <div className="absolute bottom-0 left-[120px]">
          <Image src="/gallery8.png" alt="Gallery 8" width={200} height={200} className="object-cover" />
        </div>

        {/* Image 7 (Above 8, Touching Mid) */}
        <div className="absolute bottom-[220px] left-[140px]">
          <Image src="/gallery7.png" alt="Gallery 7" width={80} height={80} className="object-cover" />
        </div>

        {/* Images 4 & 5 (Bottom Right, Horizontal) */}
        <div className="absolute bottom-0 right-0 flex gap-2">
          <Image src="/gallery4.png" alt="Gallery 4" width={180} height={120} className="object-cover" />
          <Image src="/gallery5.png" alt="Gallery 5" width={180} height={120} className="object-cover" />
        </div>

        {/* Image 2 (Above 4 & 5, Big, Same Width) */}
        <div className="absolute bottom-[140px] right-0">
          <Image src="/gallery2.png" alt="Gallery 2" width={380} height={240} className="object-cover" />
        </div>

        {/* Images 3 & 1 (Top of 2) */}
        <div className="absolute top-0 right-0 flex gap-2">
          <Image src="/gallery3.png" alt="Gallery 3" width={190} height={150} className="object-cover" />
          <Image src="/gallery1.png" alt="Gallery 1" width={190} height={150} className="object-cover" />
        </div>
      </div>
    </div>
  );
}
