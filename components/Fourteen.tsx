import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function NewPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white p-8">
      {/* Heading */}
      <h1 className="text-[32px] sm:text-[36px] md:text-[42px] font-bold uppercase text-[#222222] text-center tracking-[-0.02em] font-[Roboto Condensed]">
        LOREM IPSUM DOLOR SIT AMET
      </h1>

      {/* Paragraph */}
      <p className="text-[16px] sm:text-[18px] text-[#555555] text-center mt-6 max-w-[800px]">
        Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst.
        Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut
        aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum eget
        purus ornare. Risus elit et fringilla habitant ut facilisi.
      </p>

      {/* Image and Card Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-12 w-full max-w-[1200px] relative">
        {/* Left Section - Image */}
        <div className="lg:w-1/2">
          <Image
            src="/threemen.png" // Replace with your image source
            alt="Three Men"
            width={600}
            height={400}
            className="object-cover"
          />
        </div>

        {/* Right Section - Card */}
        <div className="lg:w-[55%] bg-white shadow-lg p-8 relative z-10 -mt-[50px] lg:-ml-[10%]">
          <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-[#222222] font-[Inter]">
            Artist & Investor
          </h2>
          <p className="text-[14px] sm:text-[16px] text-[#555555] mt-4">
            Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing
            auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac
            arcu amet nisl quis est ...
          </p>
          <a
            href="#"
            className="text-[#1959AC] text-[14px] sm:text-[16px] font-semibold mt-6 flex items-center gap-2"
          >
            Read Full Story <ArrowRight size={18} />
          </a>
        </div>
      </div>

      {/* Bottom Decorative Element (Second dot is now a curved blue line) */}
      <div className="flex items-center justify-center gap-2 mt-16">
        <div className="w-2 h-2 bg-[#222222] rounded-full"></div>
        <div className="w-8 h-2 bg-[#1959AC] rounded-lg"></div> {/* Second dot turned into a thick blue line with curved corners */}
        <div className="w-2 h-2 bg-[#222222] rounded-full"></div>
        <div className="w-2 h-2 bg-[#222222] rounded-full"></div>
        <div className="w-2 h-2 bg-[#222222] rounded-full"></div>
      </div>
    </div>
  );
}
