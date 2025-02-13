import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function NewPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
      {/* Logo */}
      <div className="mt-16">
        <Image
          src="/logo.png" // Replace with your logo source
          alt="Logo"
          width={150}
          height={150}
          className="object-cover"
        />
      </div>

      {/* Heading */}
      <h1 className="text-[42px] font-bold uppercase text-[#222222] text-center mt-8 font-['Roboto_Condensed'] tracking-tighter">
        LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DUI.
      </h1>

      {/* Paragraph */}
      <p className="text-[18px] text-[#555555] text-center mt-6 max-w-[600px]">
        Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor
        pharetra tempor quis arcu. Ipsum nullam.
      </p>

      {/* Button */}
      <button className="bg-[#0546D2] text-white px-8 py-3 rounded-lg font-semibold mt-8 hover:bg-[#1959AC] transition-colors flex items-center gap-2">
        Learn More
        <ArrowRight size={20} />
      </button>
    </div>
  );
}
