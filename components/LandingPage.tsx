import Image from 'next/image';
import { Inter, Roboto_Condensed } from 'next/font/google';

// Load fonts
const robotoCondensed = Roboto_Condensed({
  weight: '700',
  subsets: ['latin'],
});

const inter = Inter({
  weight: '600', // Semi Bold weight for subheadings
  subsets: ['latin'],
});

// Function to break text into 8 words per line
const breakTextIntoLines = (text: string, wordsPerLine: number) => {
  const words = text.split(' ');
  const lines = [];
  for (let i = 0; i < words.length; i += wordsPerLine) {
    lines.push(words.slice(i, i + wordsPerLine).join(' '));
  }
  return lines;
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Left Half */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-8 py-16 space-y-6">
        {/* Heading with Sliding Animation */}
        <h1 className={`text-[42px] tracking-[-2%] font-bold ${robotoCondensed.className} text-[#222222] animate-slide-in`}>
          Lorem ipsum dolor sit amet
        </h1>

        {/* Paragraph with Typing Effect */}
        <p className={`text-[20px] tracking-[-2%] ${inter.className} text-[#222222] animate-typing-para`}>
          {breakTextIntoLines(
            "Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero imperdiet neque. Justo suspendisse tristique posuere quis eget viverra. Nunc euismod ultrices etiam nulla habitasse.",
            8
          ).map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>

        {/* Input and Button Section */}
        <div className="flex flex-col space-y-4 w-full max-w-md">
          <div className="flex space-x-3">
            <input
              type="text"
              placeholder="Enter your email"
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="p-3 bg-[#1959AC] text-white rounded-lg hover:bg-[#0546D2] transition duration-200 flex items-center justify-center">
              <span>Submit</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
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
          </div>

          {/* Circular Symbol and Text */}
          <div className="flex items-center space-x-3">
            <div className="flex justify-center items-center w-8 h-8 bg-[#1959AC] rounded-full">
              <span className="text-white text-lg">✓</span>
            </div>
            <p className={`text-[20px] tracking-[-2%] ${inter.className} text-[#222222]`}>
              No credit card required!
            </p>
          </div>
        </div>
      </div>

      {/* Right Half - Inclined Left Side Image with Fade-In */}
      <div className="w-full md:w-1/2 h-screen relative overflow-hidden">
        <div className="absolute inset-0 clip-inclined-left opacity-0 animate-fade-in">
          <Image
            src="/bike.png" // Replace with your image path
            alt="Bike Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
