import Image from "next/image";

export default function NewPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row p-8 bg-white">
      {/* Left Section */}
      <div className="lg:w-1/2 flex flex-col justify-center space-y-6 lg:pr-8">
        {/* Heading */}
        <h1 className="text-[42px] font-[700] font-['Roboto_Condensed'] text-[#222222] uppercase tracking-[-2%]">
          LOREM IPSUM DOLOR SIT AMET
        </h1>

        {/* Table */}
        <table className="w-full border-collapse border border-[#222222]">
          <thead>
            <tr>
              <th className="border border-[#222222] p-4 bg-[#f0f0f0]">Research</th>
              <th className="border border-[#222222] p-4">Plane</th>
              <th className="border border-[#222222] p-4">Design</th>
            </tr>
          </thead>
        </table>

        {/* Paragraph */}
        <p className="text-[18px] text-[#222222]">
          Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque
          pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis
          ac turpis at amet. Purus malesuada placerat arcu at enim elit in
          accumsan.
        </p>

        {/* Link with Arrow */}
        <a
          href="#"
          className="text-[#0546D2] text-[18px] font-[600] font-['Inter'] flex items-center space-x-2"
        >
          <span>Check Tool</span>
          <span className="text-xl">→</span>
        </a>
      </div>

      {/* Right Section - Image */}
      <div className="lg:w-1/2 flex items-center justify-center mt-10 lg:mt-0">
        <Image
          src="/handshake.png"
          alt="Handshake"
          width={800} // Increased width further
          height={900} // Increased height further
          className="my-[10%] w-full h-auto" // Ensures image is responsive and fills available space
        />
      </div>
    </div>
  );
}
