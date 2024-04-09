import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import { useSelector } from "react-redux";
import Heading from "../components/Heading";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import Paragraph from "../components/Paragraph";
import Subheading from "../components/Subheading";
import ColorOval from "../assets/ColorOval";
import CustomSelector from "../components/CustomSelector";
import Button from "../components/Button";
function ProductDetails() {
  const [data, setData] = useState([]);

  let productId = useParams();
  let getAPiId = () => {
    axios.get(`https://dummyjson.com/products/${productId.id}`).then((res) => {
      setData(res.data);
    });
  };
  useEffect(() => {
    getAPiId();
  }, []);
  console.log(data);

  //   for breadcrumbs
  let dataa = useSelector((state) => state.breadcrumb.currentname);
  let breadC = window.location.pathname.replace("/", "").replace("-", " ");

  // for dynamic rating
  let buyerRating = Array.from({ length: 5 }, (element, index) => {
    let number = index + 0.5;
    return data.rating >= index + 1 ? (
      <FaStar className="text-yellow-300" />
    ) : data.rating >= number ? (
      <FaStarHalfAlt className="text-yellow-300" />
    ) : (
      <FaRegStar />
    );
  });
  return (
    <>
      <section className="pt-[124px] pb-10">
        <Container>
          <Flex className={`mb-[100px]`}>
            <h1 className="font-dmsans text-xs text-third font-normal">
              {dataa}
            </h1>
            <div className="px-2 font-dmsans text-xs text-third font-normal">
              &gt;
            </div>
            <h1 className="first-letter:uppercase font-dmsans text-xs text-third font-normal">
              {breadC}
            </h1>
          </Flex>
          <Flex className={` flex-wrap gap-10`}>
            {data.images?.map((i) => (
              <Image src={i} className={`w-[780px] h-[780px]`} />
            ))}
          </Flex>
          <div className="py-4 border-b border-b-[#D8D8D8] sm:w-[780px]">
            <Heading
              text={data.title}
              className="text-[40px] font-bold text-primary mt-5"
            />

            <div class="flex items-center">
              {buyerRating}
              <p class="ms-3 text-sm font-dmsans font-medium text-secondary ">
                {data.rating}
              </p>
              <p class="ms-1 text-sm font-dmsans font-medium text-secondary ">
                out of
              </p>
              <p class="ms-1 text-sm font-dmsans font-medium text-secondary ">
                5
              </p>
            </div>
            <Flex className={`items-center my-4 gap-x-3`}>
              <Paragraph
                text={`$${data.price / 1 + data.discountPercentage}`}
                className={`text-secondary line-through text-base`}
              />
              <Subheading text={`$${data.price}`} />
            </Flex>
          </div>
          <div className="py-4 flex flex-col gap-y-7 w-[780px] border-b">
            <Flex className={`items-center gap-x-4`}>
              <Subheading text={`Color`} className={`me-2`} />
              <ColorOval color={`black`} />
              <ColorOval color={`#FF8686`} className={`h-6 w-6`} />
              <ColorOval color={`#7ED321`} />
              <ColorOval color={`#B6B6B6`} />
              <ColorOval color={`#15CBA5`} />
            </Flex>
            <Flex className={`items-center gap-x-4`}>
              <Subheading text={`Size:`} className={`me-2`} />
              <CustomSelector />
            </Flex>
            <Flex className={`items-center gap-x-4`}>
              <Subheading text={`Status:`} className={`me-2`} />
              <Paragraph
                text={`${data.stock} Available in Stock`}
                className={`font-dmsans text-base text-secondary`}
              />
            </Flex>
          </div>
          <div className="py-5 w-[780px] border-b">
            <Flex className={`items-center gap-x-4`}>
              <Button text={`Add To Wish List`} className={`bg-white text-black hover:bg-black hover:text-white font-dmsans text-sm font-bold duration-500 py-4 px-8 border border-primary`}/>
              <Button text={`Add To Cart`} className={`hover:bg-white hover:text-black bg-black text-white font-dmsans text-sm font-bold duration-500 py-4 px-10 border border-primary`}/>
            </Flex>
          </div>
        </Container>
      </section>
    </>
  );
}

export default ProductDetails;
