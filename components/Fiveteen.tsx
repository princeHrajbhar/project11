import { Minus, Plus } from "lucide-react";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white p-8 mx-auto max-w-7xl"> {/* Adjusted to ensure responsiveness */}
      {/* Left Top Heading */}
      <h1 className="text-[32px] sm:text-[36px] md:text-[42px] font-bold uppercase text-[#222222] font-['Roboto_Condensed'] tracking-tighter text-center sm:text-left">
        FREQUENTLY ASKED QUESTIONS (FAQs)
      </h1>

      {/* First Separator - 100% width with lighter color */}
      <div className="w-full h-[1px] bg-[#BBBBBB] my-6"></div> {/* Reduced margin for mobile screens */}

      {/* FAQ Items */}
      <div className="space-y-6 sm:space-y-8">
        {/* FAQ Item 1 */}
        <div>
          {/* Subheading and Icon */}
          <div className="flex items-center justify-between">
            <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#222222] font-['Inter'] tracking-tighter">
              Lorem ipsum dolor sit amet consectetur?
            </h2>
            <Minus size={24} className="text-[#222222]" />
          </div>

          {/* Paragraph with limited width */}
          <p className="text-[16px] sm:text-[18px] text-[#555555] mt-4 max-w-full sm:max-w-[60%]">
            Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi
            suspendisse convallis. Urna a urna lectus donec felis risus duis
            pellentesque. Pellentesque ultricies ipsum.{" "}
            <span className="block mt-2">
              Lorem ipsum dolor sit amet consectetur. Curabitur vehicula, mi id
              hendrerit malesuada, nisi lorem accumsan felis.
            </span>
          </p>

          {/* Separator */}
          <div className="w-full h-[1px] bg-[#BBBBBB] my-6"></div>
        </div>

        {/* FAQ Item 2 */}
        <div>
          {/* Subheading and Icon */}
          <div className="flex items-center justify-between">
            <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#222222] font-['Inter'] tracking-tighter">
              Lorem ipsum dolor sit amet consectetur?
            </h2>
            <Plus size={24} className="text-[#222222]" />
          </div>

          {/* Separator */}
          <div className="w-full h-[1px] bg-[#BBBBBB] my-6"></div>
        </div>

        {/* FAQ Item 3 */}
        <div>
          {/* Subheading and Icon */}
          <div className="flex items-center justify-between">
            <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#222222] font-['Inter'] tracking-tighter">
              Lorem ipsum dolor sit amet consectetur?
            </h2>
            <Plus size={24} className="text-[#222222]" />
          </div>

          {/* Separator */}
          <div className="w-full h-[1px] bg-[#BBBBBB] my-6"></div>
        </div>

        {/* FAQ Item 4 */}
        <div>
          {/* Subheading and Icon */}
          <div className="flex items-center justify-between">
            <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#222222] font-['Inter'] tracking-tighter">
              Lorem ipsum dolor sit amet consectetur?
            </h2>
            <Plus size={24} className="text-[#222222]" />
          </div>

          {/* Separator */}
          <div className="w-full h-[1px] bg-[#BBBBBB] my-6"></div>
        </div>
      </div>
    </div>
  );
}
