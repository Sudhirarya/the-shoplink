import React, { useState, useRef } from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { mens_kurta } from "../../../Data/mens_kurta";

const HomeSectionCarousel = ({
  data = mens_kurta,
  sectionName = "Featured Section",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => {
    if (activeIndex > 0) {
      const newIndex = activeIndex - 1;
      setActiveIndex(newIndex);
      carouselRef.current.slideTo(newIndex);
    }
  };

  const slideNext = () => {
    if (activeIndex < data.length - 5) {
      const newIndex = activeIndex + 1;
      setActiveIndex(newIndex);
      carouselRef.current.slideTo(newIndex);
    }
  };

  const syncActiveIndex = (event) => {
    setActiveIndex(event.item);
  };

  const items = (data || [])
    .slice(0, 10)
    .map((item) => (
      <HomeSectionCard key={item.id || item.title} product={item} />
    ));

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{sectionName}</h2>
      <div className="px-4 lg:px-8 border">
        <div className="relative p-5">
          <AliceCarousel
            ref={carouselRef} // Attach reference to the carousel
            items={items}
            responsive={responsive}
            disableDotsControls
            activeIndex={activeIndex}
            onSlideChanged={syncActiveIndex} // Correct event name
          />

          {/* Navigation Buttons */}
          <button
            className="z-50 bg-white absolute top-32 right-4 rounded-full shadow p-2"
            onClick={slideNext}
            aria-label="next"
            disabled={activeIndex >= data.length - 5}
          >
            <ChevronRightIcon className="text-black" />
          </button>

          <button
            className="z-50 bg-white absolute top-32 left-4 rounded-full shadow p-2"
            onClick={slidePrev}
            aria-label="previous"
            disabled={activeIndex <= 0}
          >
            <KeyboardArrowLeftIcon className="text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
