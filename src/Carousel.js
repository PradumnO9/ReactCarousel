import { useEffect, useState } from "react";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import { data } from "./Constents";

const Carousel = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handlePreviousButton = () => {
    activeImageIndex === 0
      ? setActiveImageIndex(data.length - 1)
      : setActiveImageIndex(activeImageIndex - 1);
  };

  const handleNextButton = () => {
    setActiveImageIndex((activeImageIndex + 1) % data.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextButton();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImageIndex]);

  return (
    <div className="flex justify-center items-center">
      <BsChevronCompactLeft
        className="cursor-pointer"
        onClick={handlePreviousButton}
        size={100}
      />
      {data.map((url, index) => {
        return (
          <img
            key={url}
            className={
              "mt-6 w-1/2 h-[500px] object-contain " +
              (activeImageIndex === index ? "block" : "hidden")
            }
            src={url}
            alt="wallpaper"
          />
        );
      })}
      <BsChevronCompactRight
        className="cursor-pointer"
        onClick={handleNextButton}
        size={100}
      />
    </div>
  );
};

export default Carousel;
