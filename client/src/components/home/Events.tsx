import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventItem from "./EventItem";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const items = [1,2,3,4,5,6,7,9,11,11,112,12,12];

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style }}
        onClick={onClick}
      >
        <FaChevronRight />
      </div>
    );
  }
  
  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style}}
        onClick={onClick}
      >
        <FaChevronLeft />
      </div>
    );
  }

const Events = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

  return (
    <>
    <h1 className="text-center mt-56 mb-20 text-5xl font-semibold">Events</h1>
     <div className="slider-container">
      <Slider {...settings}>
        {items.map((item) => (
          <EventItem key={item} />
        ))}
      </Slider>
    </div>
    </>
  )
}

export default Events