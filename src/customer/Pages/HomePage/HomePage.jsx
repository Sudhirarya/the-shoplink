import React from "react";
import MainCarousel1 from "../../components/HomeCarousel/MainCarousel1";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../Data/mens_kurta";

const HomePage = () => {
  return (
    <div>
      <MainCarousel1 />

      <div className="space-y-10 py-20  flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Saree"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dress"} />
      </div>
    </div>
  );
};

export default HomePage;
