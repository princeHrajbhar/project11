"use client";

import Image from "next/image";

export default function NewPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-8 md:p-10">
      {/* Full-Width Card */}
      <div className="bg-white shadow-lg w-full flex flex-col sm:flex-row">
        {/* Left Half */}
        <div className="w-full sm:w-1/2 flex flex-col justify-center p-6 sm:p-8">
          {/* Subheading */}
          <h2 className="text-[20px] sm:text-[24px] font-semibold tracking-[-0.02em] font-['Inter'] text-blue-600">
            Lorem Ipsum
          </h2>
          {/* Heading */}
          <h1 className="text-[32px] sm:text-[36px] md:text-[42px] font-bold tracking-[-0.02em] font-['Roboto_Condensed'] text-gray-800 mt-2">
            Lorem ipsum dolor sit amet
          </h1>
          {/* Paragraph */}
          <p className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold tracking-[-0.02em] font-['Inter'] text-gray-600 mt-4">
            Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.
          </p>

          {/* Small Images (Horizontally with Gap) */}
          <div className="flex gap-6 mt-8 flex-wrap justify-center sm:justify-start">
            <Image src="/small1.png" alt="Small Image 1" width={140} height={100} className="rounded-lg" />
            <Image src="/small2.png" alt="Small Image 2" width={140} height={100} className="rounded-lg" />
          </div>
        </div>

        {/* Right Half - Full Height Image */}
        <div className="w-full sm:w-1/2 flex items-center justify-center p-6 sm:p-8">
          <Image
            src="/hand.png"
            alt="Hand Image"
            width={500} // Increased size
            height={500} // Increased size
            className="rounded-lg object-cover w-full sm:w-auto"
          />
        </div>
      </div>
    </div>
  );
}
