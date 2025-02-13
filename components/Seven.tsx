"use client"
import Card from "@/components/Card";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 p-10 flex flex-col gap-6">
      {/* Heading Section */}
      <div className="max-w-2xl">
        <h2 className="text-[20px] md:text-[24px] font-semibold text-blue-600 tracking-[-0.02em] font-['Inter']">
          Lorem ipsum dolor sit amet
        </h2>
        <h1 className="text-[42px] font-bold text-gray-900 tracking-[-0.02em] font-['Roboto_Condensed'] uppercase mt-2">
          LOREM IPSUM DOLOR SIT
        </h1>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.
        </p>
      </div>

      {/* Card Section with Left Padding */}
      <div className="pl-[20%]">
        <Card />
      </div>
    </div>
  );
}
