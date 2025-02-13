import Image from "next/image";

const data = [
  {
    subheading: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
    content:
      "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
  },
  {
    subheading: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
    content:
      "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
  },
  {
    subheading: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
    content:
      "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
  },
];

export default function Page() {
  return (
    <div className="flex flex-col w-full h-screen bg-gray-50 overflow-hidden">
      <div className="flex flex-row w-full flex-grow">
        {/* Left Section */}
        <div className="w-3/5 flex flex-col gap-4 justify-center p-6">
          <h2 className="text-lg font-semibold -tracking-[2%] font-inter text-blue-600">
            Lorem ipsum dolor sit amet
          </h2>
          <h1 className="text-3xl font-bold -tracking-[2%] font-robotoCondensed text-gray-900 leading-tight">
            Lorem ipsum dolor sit amet consectetur. Eu elit.
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend condimentum in vitae faucibus.
            Amet massa malesuada sit pretium. Donec pharetra erat lacus suspendisse ornare.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-3">
            {data.map((item, index) => (
              <div key={index} className="flex items-start gap-2 p-3 bg-white border border-gray-200 rounded-lg shadow-md">
                <Image src="/bullet.png" alt="bullet" width={16} height={16} className="mt-1" />
                <div>
                  <h3 className="text-md font-semibold -tracking-[2%] font-inter text-gray-800">
                    {item.subheading}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mt-1">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-2/5 h-full relative flex items-center justify-center">
          <div className="relative w-full h-[60%]"> {/* 60% height to leave 20% top & bottom gap */}
            <Image
              src="/men.png"
              alt="Men"
              layout="fill"
              objectFit="cover"
              className="shadow-lg rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Gradient Separator */}
      <div className="w-full h-[10px] bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 mt-5"></div>
    </div>
  );
}
