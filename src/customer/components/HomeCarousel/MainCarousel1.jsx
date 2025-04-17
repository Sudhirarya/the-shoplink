import React from "react";
import AliceCarousel from "react-alice-carousel";
import { MainCarouselData } from "./MainCarouselData";
import "react-alice-carousel/lib/alice-carousel.css";

const MainCarousel1 = () => {
  const items = MainCarouselData.map((items) => (
    <img
      className="cursor-pointer"
      role="presentation"
      src={items.image}
      alt=""
    />
  ));
  return (
    <div>
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
      />
    </div>
  );
};

export default MainCarousel1;
