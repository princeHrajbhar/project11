"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cardsData = [
  {
    image: "/cardImage1.png",
    subheading: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae.",
  },
  {
    image: "/cardImage2.png",
    subheading: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae.",
  },
  {
    image: "/cardImage3.png",
    subheading: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae.",
  },
  {
    image: "/cardImage4.png",
    subheading: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae.",
  },
];

export default function CardSection() {
  const handleClick = () => {
    toast.info("We will update it soon!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cardsData.map((card, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Image */}
            <div className="relative h-40 w-full">
              <Image src={card.image} alt="Card Image" layout="fill" objectFit="cover" />
            </div>

            {/* Content */}
            <div className="p-6">
              <h4 className="text-[20px] md:text-[24px] font-semibold text-gray-800 tracking-[-0.02em] font-['Inter']">
                {card.subheading}
              </h4>
              <p className="text-gray-600 mt-2">{card.description}</p>

              {/* Learn More Button with Toast */}
              <button
                onClick={handleClick}
                className="text-blue-600 font-medium flex items-center gap-2 mt-4 transition hover:underline"
              >
                Learn More <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
