"use client"; // Required for interactivity
import Image from "next/image";

export default function NewPage() {
  const cards = [
    {
      icon: "/icon1.png",
      content:
        "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
      profile: "/profile1.png",
      name: "John Doe",
    },
    {
      icon: "/icon1.png",
      content:
        "Another card content here. Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla.",
      profile: "/profile2.png",
      name: "Jane Smith",
    },
    {
      icon: "/icon3.png",
      content:
        "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
      profile: "/profile3.png",
      name: "John Doe",
    },
    {
      icon: "/icon4.png",
      content:
        "Another card content here. Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla.",
      profile: "/profile4.png",
      name: "Jane Smith",
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    const container = document.getElementById("card-container");
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0546D2] text-white p-8 relative">
      {/* Left Section */}
      <div className="w-full sm:w-1/2">
        {/* Subheading */}
        <p className="text-[20px] font-semibold mb-4">Join other Sun harvesters</p>

        {/* Heading and Button container */}
        <div className="flex items-center mb-6 justify-between relative">
          <h1 className="text-[32px] sm:text-[42px] font-bold uppercase whitespace-nowrap">
            LOREM IPSUM DOLOR SIT AMET
          </h1>
        </div>

        {/* Paragraph */}
        <p className="text-[16px] sm:text-[18px] mb-8">
          Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.
        </p>
      </div>

      {/* Card Section */}
      <div className="relative w-full mt-8">
        {/* Cards Container */}
        <div
          id="card-container"
          className="flex overflow-x-auto scrollbar-hide space-x-6 pb-6 mb-12"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white text-[#222222] p-6 rounded-lg shadow-lg w-[280px] sm:w-[300px]"
            >
              {/* Icon */}
              <div className="w-12 h-12 mb-4">
                <Image
                  src={card.icon}
                  alt="Icon"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <p className="text-[14px] sm:text-[16px] mb-6">{card.content}</p>

              {/* Profile */}
              <div className="flex items-center">
                <Image
                  src={card.profile}
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />
                <p className="text-[14px] sm:text-[16px] font-semibold">{card.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learn More Button */}
      <button className="bg-white text-[#0546D2] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors absolute top-8 right-8 z-10">
        Learn More
      </button>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 left-8 flex items-center space-x-4">
        <button
          onClick={() => handleScroll("left")}
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors opacity-75"
        >
          <span className="text-[#0546D2] text-2xl">←</span>
        </button>
        <button
          onClick={() => handleScroll("right")}
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors opacity-75"
        >
          <span className="text-[#0546D2] text-2xl">→</span>
        </button>
      </div>

      {/* Hide the scrollbar completely in Chrome/Safari */}
      <style jsx>{`
        #card-container::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
