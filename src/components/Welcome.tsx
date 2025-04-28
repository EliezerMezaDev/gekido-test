import Slider from "./common/Slider";

import slider_1 from "/images/carousel/slider_1.webp";
import slider_2 from "/images/carousel/slider_2.webp";
import slider_3 from "/images/carousel/slider_3.webp";
import slider_4 from "/images/carousel/slider_4.webp";
import slider_5 from "/images/carousel/slider_5.webp";
import slider_6 from "/images/carousel/slider_6.webp";

const Welcome = () => {
  const sliderItems = [
    <img
      key="1"
      src={slider_1}
      alt="image 1"
      className="h-full w-full object-cover"
    />,

    <img
      key="2"
      src={slider_2}
      alt="image 2"
      className="h-full w-full object-cover"
    />,
    <img
      key="3"
      src={slider_3}
      alt="image 3"
      className="h-full w-full object-cover"
    />,
    <img
      key="4"
      src={slider_4}
      alt="image 4"
      className="h-full w-full object-cover"
    />,
    <img
      key="5"
      src={slider_5}
      alt="image 5"
      className="h-full w-full object-cover"
    />,
    <img
      key="6"
      src={slider_6}
      alt="image 6"
      className="h-full w-full object-cover"
    />,
  ];

  return (
    <div className="relative h-[calc(100vh-88px)]">
      <Slider items={sliderItems} />
    </div>
  );
};

export default Welcome;
