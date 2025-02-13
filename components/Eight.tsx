"use client";

import Image from "next/image";

export default function BackgroundPage() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src="/background2.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />

      {/* Logo at Top Left */}
      <div className="absolute top-5 left-5">
        <Image src="/logo.png" alt="Logo" width={100} height={50} />
      </div>

      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
        {/* All Text as Headings (42px, Bold, Roboto Condensed) */}
        <h1 className="text-[42px] font-bold tracking-[-0.02em] font-['Roboto_Condensed'] uppercase leading-tight">
          dolor sit amet consectetur.
        </h1>

        <h1 className="text-[42px] font-bold tracking-[-0.02em] font-['Roboto_Condensed'] uppercase leading-tight mt-2">
          quis adipiscing purus egestas aliquam viverra mi.
        </h1>

        <h1 className="text-[42px] font-bold tracking-[-0.02em] font-['Roboto_Condensed'] uppercase leading-tight mt-2">
          dolor sit amet consectetur.
        </h1>

        <h1 className="text-[42px] font-bold tracking-[-0.02em] font-['Roboto_Condensed'] uppercase leading-tight mt-2">
          quis adipiscing
        </h1>
      </div>
    </div>
  );
}
