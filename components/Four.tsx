import Image from "next/image";

export default function Page() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      {/* Next.js Logo */}
      <div className="absolute top-4 left-4 p-4">
        <Image src="/logo.png" alt="Next.js Logo" width={70} height={70} />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-3xl">
          Lorem ipsum dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi.
        </h1>
        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mt-4">
          Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum nulla quam.
        </p>
        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mt-4">
          Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper in tincidunt pellentesque cras mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.
        </p>
      </div>
    </div>
  );
}
