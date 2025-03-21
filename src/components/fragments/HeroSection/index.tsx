import React from "react";
import Content from "./Content";
import Photo from "./Photo";

const HeroSection = () => {
  return (
    <div className="flex lg:flex-row flex-col xl:gap-32 lg:gap-20 gap-12 py-[20px]">
      <Content />
      <Photo />
    </div>
  );
};

export default HeroSection;
