import Image from "next/image";
import React from "react";

const Photo = () => {
  return (
    <Image
      src="/personalPhoto.png"
      alt="personal photo"
      width={304}
      height={405}
      className="order-1 lg:order-2"
    ></Image>
  );
};

export default Photo;
