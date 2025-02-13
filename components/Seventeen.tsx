import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#131824] py-12 relative">
      {/* Footer Container */}
      <div className="mx-auto w-full max-w-screen-xl">
        {/* Logo on the top left corner */}
        <div className="absolute top-0 left-0 p-4">
          <Image
            src="/logo.png" // Replace with your logo source
            alt="Logo"
            width={100}
            height={100}
            className="object-cover"
          />
        </div>

        {/* Footer Columns with 10% margin from left */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 ml-[10%]">
          {/* Column 1 */}
          <div className="space-y-4">
            <h3 className="text-[20px] font-bold text-white font-['Roboto_Condensed']">Lorem Ipsum</h3>
            <ul className="text-white text-[16px] space-y-2">
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h3 className="text-[20px] font-bold text-white font-['Roboto_Condensed']">Lorem Ipsum</h3>
            <ul className="text-white text-[16px] space-y-2">
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h3 className="text-[20px] font-bold text-white font-['Roboto_Condensed']">Lorem Ipsum</h3>
            <ul className="text-white text-[16px] space-y-2">
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="space-y-4">
            <h3 className="text-[20px] font-bold text-white font-['Roboto_Condensed']">Lorem Ipsum</h3>
            <ul className="text-white text-[16px] space-y-2">
              <li>Lorem Ipsum</li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
