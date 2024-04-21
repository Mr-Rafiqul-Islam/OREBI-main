import React, { useState } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Breadcrumb from "../components/Breadcrumb";
import Paragraph from "../components/Paragraph";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let handleName = (e) => {
    setName(e.target.value);
  };
  let handleEmail = (e) => {
    setEmail(e.target.value);
  };
  let handlePass = (e) => {
    setPassword(e.target.value);
  };
  let handleSubmit = (e)=>{
    e.preventDefault();
    console.log("ami parci");
  }
  return (
    <section className="mt-[124px] mb-[140px]">
      <Container>
        <Heading text="Sign Up" className="text-5xl font-bold text-primary" />
        <Breadcrumb />
        <Paragraph
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."
          className="text-third text-base font-normal w-[644px] leading-[30px]"
        />
        <hr className="mb-[57px] mt-[62px]" />
        <Heading
          text="Your Personal Details"
          className="text-[39px] font-bold text-primary  mb-[42px]"
        />
        <form action="" method="post">
          <div className="grid grid-cols-3 gap-10 mb-7">
            <Input
              onchange={handleName}
              inputype="text"
              labelname="First Name"
              inputph="First Name"
            />
            <Input inputype="text" labelname="Last Name" inputph="Last Name" />
          </div>
          <div className="grid grid-cols-3 gap-10">
            <Input
              onchange={handleEmail}
              inputype="email"
              labelname="Email Address"
              inputph="company@domain.com"
            />
            <Input
              inputype="tel"
              labelname="Telephone"
              inputph="Your phone number"
            />
          </div>
          <hr className="mt-[70px] mb-[57px]" />
          <Heading
            text="New Customer"
            className="text-[39px] font-bold text-primary mb-[42px]"
          />
          <div className="grid grid-cols-3 gap-10 mb-7">
            <Input
              inputype="text"
              labelname="Address 1"
              inputph="4279 Zboncak Port Suite 6212"
            />
            <Input inputype="text" labelname="Address 2" inputph="-" />
          </div>
          <div className="grid grid-cols-3 gap-10 mb-7">
            <Input inputype="text" labelname="City" inputph="Your City" />
            <Input inputype="text" labelname="Post Code" inputph="05228" />
          </div>
          <div className="grid grid-cols-3 gap-10">
            <div>
              <label
                htmlFor="state"
                className="font-dmsans font-bold text-primary text-base block mb-[10px]"
              >
                Country
              </label>
              <select
                name="country"
                className="bg-transparent w-full focus:outline-none border-b-2 border-[#F0F0F0] pb-[20px]"
                id="country"
              >
                <option value="">Please select</option>
                <option value="">please </option>
                <option value="">please </option>
              </select>
            </div>
            <div>
              <label
                htmlFor="state"
                className="font-dmsans font-bold text-primary text-base block mb-[10px]"
              >
                Region/State
              </label>
              <select
                name="state"
                className="bg-transparent w-full focus:outline-none border-b-2 border-[#F0F0F0] pb-[20px]"
                id="state"
              >
                <option value="">Please select</option>
                <option value="">please </option>
                <option value="">please </option>
              </select>
            </div>
          </div>
          <hr className="mt-[70px] mb-[57px]" />
          <Heading
            text="Your Password"
            className="text-[39px] font-bold text-primary mb-[42px]"
          />
          <div className="grid grid-cols-3 gap-10 mb-7">
            <Input
              inputype="password"
              onchange={handlePass}
              labelname="Password"
              inputph="password"
            />
            <Input
              inputype="password"
              labelname="Repeat Password"
              inputph="Repeat password"
            />
          </div>
          <div className="mb-[10px]">
            <input type="checkbox" id="policy" name="policy" value="" />
            <label
              for="policy"
              className="font-dmsans font-regular text-third text-sm ms-3"
              aria-required="true"
            >
              {" "}
              I have read and agree to the Privacy Policy
            </label>
          </div>
          <div className="mb-[30px]">
            <span className="font-dmsans font-regular text-third text-sm me-8">
              Subscribe Newsletter
            </span>
            <input
              type="radio"
              id="Yes"
              name="newsletter"
              value="Yes"
              className="w-4 h-4 rounded-[0px] me-4 ms-4"
            />
            <label
              for="Yes"
              className="font-dmsans font-regular text-third text-sm"
            >
              Yes
            </label>
            <input
              type="radio"
              id="No"
              name="newsletter"
              value="No"
              className="w-4 h-4 rounded-[0px] me-4 ms-4"
            />
            <label
              for="No"
              className="font-dmsans font-regular text-third text-sm"
            >
              No
            </label>
          </div>

          <Button onClick={handleSubmit} text="Sign in" className="py-4 ps-[77px] pe-[83px]" />
          <div className="mt-5 font-dmsans text-sm text-secondary">
            Already have an account ? Please
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
            Here
          </div>
        </form>
      </Container>
    </section>
  );
}

export default SignUp;
