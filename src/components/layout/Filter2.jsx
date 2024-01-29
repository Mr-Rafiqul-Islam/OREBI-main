import React from "react";
import Flex from "../Flex";
import Grid1 from "../Icons/Grid1";
import { FaList } from "react-icons/fa";
import Paragraph from "../Paragraph";
import { IoMdArrowDropup } from "react-icons/io";

const Filter2 = ({className}) => {
  return (
    <div className={`${className} w-full`}>
      <div className="flex justify-between">

        <div className="flex w-24">
          <Grid1 className="me-5" />
          <FaList className="text-4xl" />
        </div>

        <div className="w-[550px] flex justify-between">
          <Flex className="items-center w-[350px]">
            <Paragraph
              text="Sort by:"
              className="text-third font-normal text-base me-[14px]"
            />
            <div className="w-[239px] py-[3px] border border-[#F0F0F0] flex justify-between items-center">
              <Paragraph
                text="Featured"
                className="text-third font-normal text-base ps-[21px]"
              />
                <IoMdArrowDropup className="me-[21px]"/>
            </div>
          </Flex>
          <Flex className='items-center'>
          <Paragraph
              text="Show:"
              className="text-third font-normal text-base me-[14px]"
            />
            <div className="w-[139px] py-[3px] border border-[#F0F0F0] flex justify-between items-center">
              <Paragraph
                text="36"
                className="text-third font-normal text-base ps-[21px]"
              />
                <IoMdArrowDropup className="me-[21px]"/>
            </div>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default Filter2;
