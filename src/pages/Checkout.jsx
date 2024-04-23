import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Breadcrumb from "../components/Breadcrumb";
import { useSelector } from "react-redux";
import { getDatabase, ref, onValue } from "firebase/database";

function Checkout() {
  // for getting info of cart product
  let info = useSelector((state) => state.singleproduct.cartitem);
  // console.log(info);
  // for sum total price
  const { totalprice, totalquantity } = info.reduce(
    (acc, item) => {
      acc.totalprice += item.price * item.qun;
      acc.totalquantity += item.qun;
      return acc;
    },
    { totalprice: 0, totalquantity: 0 }
  );
  //   for user information
  const db = getDatabase();
  const [userdata, setUserdata] = useState([]);
  useEffect(() => {
    const starCountRef = ref(db, "users/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        setUserdata(item.val());
      });
    });
  }, []);
  return (
    <section className="pt-[124px] pb-[131px]">
      <Container>
        <div className="">
          <Heading
            text="Checkout"
            className="text-5xl font-bold text-primary "
          />
          <Breadcrumb />
          <p className="font-dmsans font-normal text-[16px] text-[#767676] pt-14 mb-20 -mt-10">
            Have a coupon?{" "}
            <span className="text-[#262626]">
              Click here to enter your code
            </span>
          </p>
        </div>
        <div className="w-[80%]">
          <h2 className="font-dmsans font-bold text-[39px] text-[#262626] pb-4">
            Billing Details
          </h2>
          <form action="">
            <div className="w-[70%] flex justify-between">
              <div className="w-[45%]">
                <label
                  htmlFor=""
                  className="font-dmsans font-bold text-[16px] text-[#262626]"
                >
                  First Name*
                </label>{" "}
                <br />
                <input
                  className="outline-none font-dmsans font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full "
                  type="text"
                  placeholder="First Name"
                  defaultValue={userdata.username}
                />{" "}
                <hr />
              </div>
              <div className="w-[45%]">
                <label
                  className="font-dmsans font-bold text-[16px] text-[#262626]"
                  htmlFor=""
                >
                  Last Name*
                </label>{" "}
                <br />
                <input
                  className="outline-none font-dmsans font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full "
                  type="email"
                  placeholder="Last Name"
                />{" "}
                <hr />
              </div>
            </div>
            <div className="py-6">
              <label
                className="font-dmsans font-bold text-[16px] text-[#262626]"
                htmlFor=""
              >
                Companye Name (optional)
              </label>
              <input
                className="outline-none font-dmsans font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full "
                type="text"
                placeholder="Company Name"
              />{" "}
              <hr />
            </div>
            <div className="py-6">
              <label
                className="font-dmsans font-bold text-[16px] text-[#262626]"
                htmlFor=""
              >
                Country *
              </label>
              <input
                className="outline-none font-dmsans font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full "
                type="text"
                placeholder="Please select"
              />{" "}
              <hr />
            </div>
            <div className="py-6">
              <label
                className="font-dmsans font-bold text-[16px] text-[#262626]"
                htmlFor=""
              >
                Street Address *
              </label>
              <input
                className="outline-none font-dmsans font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full "
                type="text"
                placeholder="House number and street name"
              />{" "}
              <hr />
              <input
                className="outline-none font-dmsans font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full mt-2"
                type="text"
                placeholder="Apartment, suite, unit etc. (optional)"
              />{" "}
              <hr />
            </div>
            <div className="py-6">
              <label
                className="font-dmsans font-bold text-[16px] text-[#262626]"
                htmlFor=""
              >
                Town/City *
              </label>
              <input
                className="outline-none font-dmsans font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full "
                type="text"
                placeholder="Town/City"
              />{" "}
              <hr />
            </div>
            <div className="py-6">
              <label
                className="font-dmsans font-bold text-[16px] text-[#262626]"
                htmlFor=""
              >
                County (optional)
              </label>
              <input
                className="outline-none font-dmsans font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full "
                type="text"
                placeholder="County"
              />{" "}
              <hr />
            </div>
            <div className="py-6">
              <label
                className="font-dmsans font-bold text-[16px] text-[#262626]"
                htmlFor=""
              >
                Post Code *
              </label>
              <input
                className="outline-none font-dmsans font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full "
                type="code"
                placeholder="Post Code"
              />{" "}
              <hr />
            </div>
            <div className="py-6">
              <label
                className="font-dmsans font-bold text-[16px] text-[#262626]"
                htmlFor=""
              >
                Phone *
              </label>
              <input
                className="outline-none font-dmsans font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full "
                type="code"
                placeholder="Phone"
              />{" "}
              <hr />
            </div>
            <div className="py-6">
              <label
                className="font-dmsans font-bold text-[16px] text-[#262626]"
                htmlFor=""
              >
                Email Address *
              </label>
              <input
                className="outline-none font-dmsans font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full "
                type="email"
                placeholder="Email"
                defaultValue={userdata.email}
              />{" "}
              <hr />
            </div>
          </form>
          <div className="py-[100px]">
            <h2 className="font-dmsans font-bold text-[39px] line-height:[36px] text-[#262626] pb-[42px]">
              Your Personal Details
            </h2>
            <form action="">
              <label
                className="font-dmsans font-bold text-[16px] text-[#262626]"
                htmlFor=""
              >
                Other Notes (optional)
              </label>
              <textarea
                className="outline-none font-dmsans font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full ring-1 ring-[gray]"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Notes about your order, e.g. special notes for delivery."
              ></textarea>
            </form>
          </div>
        </div>
        <div className="w-[40%] pb-[100px]">
          <h2 className="font-dmsans font-bold text-[39px] text-[#262626] pb-4">
            Your Order
          </h2>
          <table className="w-full border-collapse border border-slate-400">
            <thead>
              <tr>
                <th className="font-dmsans font-bold text-[16px] text-[#262626] text-start px-4 py-4 border border-slate-200 ">
                  Product
                </th>
                <th className="font-dmsans font-normal text-[16px] text-[#767676] text-start px-4 border border-slate-200 ">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {info.map((item, i) => (
                <tr>
                  <td className="font-dmsans font-bold text-[16px] text-[#262626] text-start px-4 py-4 border border-slate-200">
                    {item.title} x {item.qun}
                  </td>
                  <td className="font-dmsans font-normal text-[16px] text-[#767676] px-4 border border-slate-200 ">
                    ${item.price * item.qun}
                  </td>
                </tr>
              ))}
              <tr>
                <td className="font-dmsans font-bold text-[16px] text-[#262626] text-start px-4 py-4 border border-slate-200 ">
                  Total Quantity
                </td>
                <td className="font-dmsans font-normal text-[16px] text-[#767676] px-4 border border-slate-200 ">
                  {totalquantity}
                </td>
              </tr>
              <tr>
                <td className="font-dmsans font-bold text-[16px] text-[#262626] text-start px-4 py-4 border border-slate-200 ">
                  Subtotal
                </td>
                <td className="font-dmsans font-normal text-[16px] text-[#767676] px-4 border border-slate-200 ">
                  ${totalprice}
                </td>
              </tr>
              <tr>
                <td className="font-dmsans font-bold text-[16px] text-[#262626] text-start px-4 py-4 border border-slate-200 ">
                  Total
                </td>
                <td className="font-dmsans font-normal text-[16px] text-[#767676] px-4 border border-slate-200 ">
                  ${totalprice}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

export default Checkout;
