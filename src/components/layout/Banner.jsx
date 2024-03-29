import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import banner from "../../assets/bannner.png";
import { FaTruck, FaUndo } from "react-icons/fa";
import Two from "../Icons/Two";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    appendDots: (dots) => (
      <div
        style={{
          position:"absolute",
          borderRadius: "10px",
          padding: "10px",
          top:"45%",
          left:"10%",
        }}
      >
        <ul
          style={{
            margin: "0px",
            display:"flex",
            flexDirection:"column",
            gap:"20px"
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          height:"40px",
          color: "rgb(38, 38, 38)",
          borderRight: "3px white solid",
          display:"grid",
          placeContent:"center"
        }}
      >
        0{i + 1}
      </div>
    ),
  };
  return (
    <section className="">
      <Slider {...settings}>
        <Link to="#">
          <Image src={banner} className="w-full" />
        </Link>
        <Link to="#">
          <Image src={banner} className="w-full" />
        </Link>
        <Link to="#">
          <Image src={banner} className="w-full" />
        </Link>
      </Slider>
      <div className="py-[30px] border-y-2 border-[#F0F0F0]">
        <Container>
          <Flex className="items-center">
            <div className="w-1/3 flex items-center text-third text-base font-normal font-dmsans gap-4">
              {" "}
              <Two /> Two years warranty
            </div>
            <div className="w-1/3 flex items-center text-third text-base font-normal font-dmsans justify-center gap-4">
              {" "}
              <FaTruck className="text-primary text-2xl" /> Free shipping
            </div>
            <div className="w-1/3 flex items-center text-third text-base font-normal font-dmsans justify-end gap-4">
              {" "}
              <FaUndo className="text-primary text-xl" /> Return policy in 30
              days
            </div>
          </Flex>
        </Container>
      </div>
    </section>
  );
};

export default Banner;
