import React from "react";
import { useSelector } from "react-redux";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Heading from "../components/Heading";
import Breadcrumb from "../components/Breadcrumb";
import { ImCross } from "react-icons/im";
import Image from "../components/Image";
import cartpic from "../assets/cartthumbnail.png";
import Subheading from "../components/Subheading";
import Paragraph from "../components/Paragraph";
import { FaMinus, FaPlus } from "react-icons/fa";

function Cartlist() {
  // for dynamic bredcrumb
  let data = useSelector((state) => state.breadcrumb.currentname);
  let breadC = window.location.pathname.replace("/", "").replace("-", " ");

  // for getting info of cart product
  let info = useSelector((state) => state.singleproduct.cartitem);
  console.log(info);
  return (
    <section className="pt-[124px] pb-[131px]">
      <Container>
        <Flex>
          <h1>{data}</h1>
          <div className="px-2">&gt;</div>
          <h1 className="first-letter:uppercase">{breadC}</h1>
        </Flex>
        <Heading text="Cart" className="text-5xl font-bold text-primary " />
        <Breadcrumb />

        {/* cartlist start here */}
        <div className="cartlist">
          <div className="grid grid-cols-4 px-4 py-8 bg-[#F5F5F3]">
            <h4 className="font-dmsans font-bold text-base text-primary">
              Product
            </h4>
            <h4 className="font-dmsans font-bold text-base text-primary">
              Price
            </h4>
            <h4 className="font-dmsans font-bold text-base text-primary">
              Quantity
            </h4>
            <h4 className="font-dmsans font-bold text-base text-primary">
              Total
            </h4>
          </div>
          {/* for dynamic adding cart data */}

          { info.map((item,i)=>(

          <div className="grid grid-cols-4 px-4 py-7 border items-center" key={i}>
            <div className="flex items-center">
              <button>
                <ImCross className="text-sm" />
              </button>
              <Image src={item.thumbnail} className={`h-[100px] w-[100px] mx-5`} />
              <Subheading text={`$${item.title}`} />
            </div>
            <Subheading text={`$${item.price}`} />
            <div className="quantity">
              <div className="flex justify-between items-center px-2 border w-[139px] h-9">
                <button>
                  <FaMinus className="text-sm" />
                </button>
                <Paragraph text={`1`} />
                <button>
                  <FaPlus className="text-sm" />
                </button>
              </div>
            </div>
            <Subheading text={`$44.00`} />
          </div>
          ))
          }
        </div>
        {/* cartlist end here */}
      </Container>
    </section>
  );
}

export default Cartlist;
