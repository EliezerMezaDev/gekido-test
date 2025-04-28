import { useState, ReactNode } from "react";

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

interface SliderProps {
  items: ReactNode[];
  className?: string;
  height?: string;
}

const Slider = ({ items, className = "", height = "h-64" }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className={`relative w-full h-full mx-auto ${className}`}>
      <div className={`overflow-hidden relative w-full h-full ${height}`}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform transform ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 rounded-full text-white bg-black opacity-50 hover:opacity-100  transition-colors cursor-pointer"
        onClick={prevSlide}
      >
        <FaArrowAltCircleLeft className="w-7.5 h-7.5" />
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 rounded-full text-white bg-black opacity-50 hover:opacity-100  transition-colors cursor-pointer"
        onClick={nextSlide}
      >
        <FaArrowAltCircleRight className="w-7.5 h-7.5" />
      </button>
    </div>
  );
};

export default Slider;
