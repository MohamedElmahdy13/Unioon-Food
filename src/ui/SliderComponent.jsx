import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = ({ children, settings }) => {
  // const settings = {

  // };
  return <Slider {...settings}>{children}</Slider>;
};

export default SliderComponent;
