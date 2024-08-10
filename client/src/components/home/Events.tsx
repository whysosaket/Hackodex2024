import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventItem from "./EventItem";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
// import { useEffect, useState } from "react";
import { isMobile, isTablet } from 'react-device-detect';

const items = [1, 2, 3, 4];

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <FaChevronRight />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <FaChevronLeft />
    </div>
  );
}

const Events = () => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const mobileSettings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const tabletSettings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  // const [isMobile, setIsMobile] = useState({});

  // useEffect(() => {
  //   if (window.innerWidth < 768) {
  //     setIsMobile(mobileSettings);
  //   } else {
  //     setIsMobile(settings);
  //   }
  // }, []);

  return (
    <>
      <h1 className="text-center md:mt-56 mb-20 text-5xl font-semibold">
        Events
      </h1>
      <div className="slider-container">
        <Slider {...isMobile&&!isTablet?mobileSettings:isTablet?tabletSettings:settings}>
          {items.map((item) => (
            <EventItem key={item} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Events;
