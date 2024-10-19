"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import Image from "next/image";

interface Review {
  id: number;
  name: string;
  company: string;
  review: string;
  avatar: string;
  image: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sagar Jujare",
    company: "CEO at Jujare Tech Advisors",
    review:
      "My main goal was to find an easy-to-teach app that comprehended all the tasks needed for our customer service. Sahasra AI, from the beginning, was the perfect one.",
    avatar: "/api/placeholder/64/64",
    image: "https://i.ibb.co/qswTtqk/image.jpg",
  },

  {
    id: 2,
    name: "Ravi Kumar",
    company: "Manager at Cosmenova Pvt Ltd.",
    review:
      "Sahasra AI has made managing customer queries and product recommendations effortless for our team. It has significantly improved efficiency, allowing us to focus more on business growth.",
    avatar: "/api/placeholder/64/64",
    image: "https://i.ibb.co/hDGRdmP/image.jpg",
  },

  {
    id: 3,
    name: "Gabriele Scarcella",
    company: "MD at The Grand",
    review:
      "Sahasra AI has streamlined our guest services by handling bookings, inquiries, and recommendations with ease. It has enhanced efficiency, allowing our staff to focus on delivering exceptional hospitality.",
    avatar: "/api/placeholder/64/64",
    image: "https://i.ibb.co/YkZZmRh/image.jpg",
  },
  // Add more reviews as needed
];

const customImageLoader = ({ src }: { src: string }) => {
  return src;
};

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [avatarError, setAvatarError] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
    setAvatarError(false);
    setImageError(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    setAvatarError(false);
    setImageError(false);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setAvatarError(false);
    setImageError(false);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto my-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Join our AI-delighted customers
      </h2>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-full md:w-3/5 bg-gray-100 p-8 rounded-xl shadow-lg">
          <div className="relative w-16 h-16 mb-6">
            {avatarError ? (
              <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center">
                <User className="w-8 h-8 text-gray-500" />
              </div>
            ) : (
              <Image
                src={reviews[currentIndex].avatar}
                alt={reviews[currentIndex].name}
                width={64}
                height={64}
                className="rounded-full"
                onError={() => setAvatarError(true)}
              />
            )}
          </div>
          <p className="text-gray-700 text-lg mb-6 font-medium">
            {reviews[currentIndex].review}
          </p>
          <div className="flex flex-col">
            <span className="font-bold text-lg">
              {reviews[currentIndex].name}
            </span>
            <span className="text-gray-600 text-sm">
              {reviews[currentIndex].company}
            </span>
          </div>
        </div>
        <div className="w-full md:w-2/5 bg-white rounded-lg shadow-lg overflow-hidden relative h-64 md:h-auto">
          {imageError ? (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Image not available</span>
            </div>
          ) : (
            <Image
              loader={customImageLoader}
              src={reviews[currentIndex].image}
              alt="Company"
              fill
              sizes="(max-width: 768px) 90vw, 400px"
              style={{ objectFit: "cover" }}
              onError={() => setImageError(true)}
            />
          )}
          <div className="absolute bottom-4 right-4 bg-white bg-opacity-75 px-4 py-2 rounded">
            <span className="font-bold text-gray-800">Sahasra AI</span>
            <span className="block text-sm text-gray-600">The Chat Bot</span>
          </div>
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>
      <div className="flex justify-center mt-8 space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
