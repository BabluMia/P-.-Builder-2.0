import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./slider.css"
const BannerSlider = ({ banners, setdesign }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div style={{ maxWidth: "78vw " }} className="mt-4 px-3">
      {/* slider */}
      <Slider {...settings}>
        {banners.map((image) => (
          <div key={image.id} onClick={() => setdesign(image.id)}>
            <img className="img-fluid" src={image.img} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
