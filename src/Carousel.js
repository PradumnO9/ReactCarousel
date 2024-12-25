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
    }, 5000);
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
      {data.map((d, index) => {
        return (
          <div>
            <img
              key={d.id}
              className={
                "mt-6 w-[800px] h-[500px] object-contain " +
                (activeImageIndex === index ? "block" : "hidden")
              }
              src={d.imgUrl}
              alt="wallpaper"
            />
            <p
              className={
                "text-center font-bold text-xl p-2 " +
                (activeImageIndex === index ? "block" : "hidden")
              }
            >
              {d.description}
            </p>
          </div>
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
