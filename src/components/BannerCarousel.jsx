import React from "react";
import Slider from "react-slick";
import banner01 from "../assets/Banners/banner01.jpg";
import banner02 from "../assets/Banners/banner02.jpg";
import banner03 from "../assets/Banners/banner03.jpg";
import banner04 from "../assets/Banners/banner04.jpg";
import banner05 from "../assets/Banners/banner05.jpg";
import banner06 from "../assets/Banners/banner06.jpg";

const items = [
  { src: banner01, altText: "Slide 1" },
  { src: banner02, altText: "Slide 2" },
  { src: banner03, altText: "Slide 3" },
  { src: banner04, altText: "Slide 4" },
  { src: banner05, altText: "Slide 5" },
  { src: banner06, altText: "Slide 6" },
];

const BannerCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} className="m-0 p-0 w-100">
      {items.map((item, index) => (
        <div key={index}>
          <img src={item.src} alt={item.altText} style={{ width: "100%" }} />
        </div>
      ))}
    </Slider>
  );
};

export default BannerCarousel;
