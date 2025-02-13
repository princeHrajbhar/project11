import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      {/* Heading */}
      <h1 className="text-[42px] font-bold text-center text-gray-900 leading-tight tracking-[-0.02em] font-['Roboto_Condensed'] mb-12 uppercase">
        LOREM IPSUM DOLOR SIT AMET <br />
        CONSECTETUR. COMMODO LEO AMET.
      </h1>

      {/* Diamond Shape Grid */}
      <div className="flex flex-col items-center gap-6 w-full">
        {/* Row 1 - 1 logo */}
        <div className="flex justify-center gap-8 md:gap-16">
          <Image src="/company1.png" alt="Company 1" width={80} height={80} />
        </div>

        {/* Row 2 - 3 logos */}
        <div className="flex justify-center gap-8 sm:gap-12 md:gap-16">
          <Image src="/company2.png" alt="Company 2" width={90} height={90} />
          <Image src="/company3.png" alt="Company 3" width={90} height={90} />
          <Image src="/company4.png" alt="Company 4" width={90} height={90} />
        </div>

        {/* Row 3 - 4 logos (Widest row) */}
        <div className="flex justify-center gap-8 sm:gap-12 md:gap-16">
          <Image src="/company5.png" alt="Company 5" width={100} height={100} />
          <Image src="/company6.png" alt="Company 6" width={100} height={100} />
          <Image src="/company7.png" alt="Company 7" width={100} height={100} />
          <Image src="/company8.png" alt="Company 8" width={100} height={100} />
        </div>

        {/* Row 4 - 3 logos */}
        <div className="flex justify-center gap-8 sm:gap-12 md:gap-16">
          <Image src="/company9.png" alt="Company 9" width={90} height={90} />
          <Image src="/company10.png" alt="Company 10" width={90} height={90} />
          <Image src="/company11.png" alt="Company 11" width={90} height={90} />
        </div>

        {/* Row 5 - 1 logo */}
        <div className="flex justify-center gap-8 md:gap-16">
          <Image src="/company12.png" alt="Company 12" width={80} height={80} />
        </div>
      </div>
    </div>
  );
}
