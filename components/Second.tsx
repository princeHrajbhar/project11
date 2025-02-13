import Image from 'next/image';
import { Inter, Roboto_Condensed } from 'next/font/google';

// Load fonts
const robotoCondensed = Roboto_Condensed({
  weight: '700',
  subsets: ['latin'],
});

const inter = Inter({
  weight: '400', // Normal weight for paragraphs
  subsets: ['latin'],
});

// Function to break text into 6 words per line
const breakTextIntoLines = (text: string, wordsPerLine: number) => {
  const words = text.split(' ');
  const lines = [];
  for (let i = 0; i < words.length; i += wordsPerLine) {
    lines.push(words.slice(i, i + wordsPerLine).join(' '));
  }
  return lines;
};

export default function Home() {
  // JSON data for card content
  const cardContent = [
    {
      text: "Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.",
      image: "/bike1.png",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.",
      image: "/bike2.png",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt.",
      image: "/bike3.png",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col ml-[10%]">
      <div className="flex flex-1">
        {/* Left Half */}
        <div className="w-full md:w-1/2 flex flex-col justify-start items-start pl-12 pr-8 pt-8 space-y-6">
          {/* Small Lorem Ipsum at Top Left */}
          <p className={`text-blue-500 text-sm font-semibold ${inter.className}`}>
            Lorem ipsum dolor sit
          </p>

          {/* Subheading */}
          <h2 className={`text-[20px] font-semibold ${robotoCondensed.className}`}>
            Lorem ipsum dolor sit amet
          </h2>

          {/* Content Paragraph */}
          <p className={`text-[14px] text-gray-600 ${inter.className}`}>
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi
            porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis
            aliquet. Hendrerit tellus at purus lectus.
          </p>

          {/* Cards Section - Vertical Layout */}
          <div className="flex flex-col space-y-4 w-full">
            {cardContent.map((content, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src={content.image} // Dynamically set the image path
                  alt={`Bike ${index + 1}`}
                  width={60} // Square width
                  height={60} // Square height
                  className="rounded-lg w-15 h-15 object-cover" // Ensure square shape
                />
                <p className={`text-[12px] text-gray-600 ${inter.className}`}>
                  {breakTextIntoLines(content.text, 6).map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>

          {/* Button and Phone Number Section Inside the Card */}
          <div className="flex flex-col items-start space-y-4 w-full mt-6 p-4 border-t border-gray-200">
            {/* Button and Phone Number in Horizontal Layout */}
            <div className="flex items-center space-x-4">
              {/* Button Section */}
              <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 flex items-center justify-center text-[12px]">
                <span>Loerum Ipsum</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Phone Number with Icon */}
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className={`text-[12px] text-gray-600 ${inter.className}`}>+91 12345 67890</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Half - Reduced Height Image */}
        <div className="w-full md:w-1/2 h-[85vh] relative overflow-hidden mt-8 mb-8 mr-8">
          <Image
            src="/bike4.png" // Replace with your image path
            alt="Bike 4"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Gradient Separator */}
      <div className="w-full h-[10px] bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 mt-5"></div>
    </div>
  );
}
