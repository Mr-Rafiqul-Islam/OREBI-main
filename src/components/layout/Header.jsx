import React, { useState, useEffect, useRef } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import user from "../../assets/Icon_user.png";
import cart from "../../assets/Icon_cart.png";
import Bar from "../Icons/Bar";
import Search from "../Icons/Search";
import UserPopup from "./UserPopup";
import MenuCategory from "../MenuCategory";
import AddToCart from "../AddToCart";

const Header = () => {
  const [userOpen, setUserOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  let menuRef = useRef();
  let userRef = useRef();
  let cartRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (menuRef.current.contains(e.target) == true) {
        setMenu(!menu);
      } else {
        setMenu(false);
      }
      if (userRef.current.contains(e.target) == true) {
        setUserOpen(!userOpen);
      } else {
        setUserOpen(false);
      }
      if (cartRef.current.contains(e.target) == true) {
        setCartOpen(!cartOpen);
      } else {
        setCartOpen(false);
      }
      
    };

    document.addEventListener("click", handler);
  }, [menu,userOpen,cartOpen]);
  return (
    <section className="bg-header py-[25px] border-b-2 border-borderColor">
      <Container>
        <Flex className="items-center">
          <div className="w-1/3">
            <button ref={menuRef}>
              <Flex className="items-center gap-2.5">
                <Bar />
                <p className="text-primary font-dmsans text-[14px] font-normal">
                  Shop by Category
                </p>
              </Flex>
            </button>
            {menu && <MenuCategory className={`z-50`}/>}
          </div>
          <div className="w-1/3 relative">
            <input
              type="text"
              placeholder="Search Products"
              className="w-full py-4 ps-[21px] placeholder:text-[14px] placeholder:text-[#C4C4C4] focus:outline-none"
            />
            <div className="absolute top-1/2 -translate-y-1/2 right-[17px]">
              <a href="#" className="">
                <Search />
              </a>
            </div>
          </div>
          <div className="w-1/3">
            <Flex className="justify-end">
              <button ref={userRef}>
                <Image src={user} className="me-[41px]" />
              </button>
              {userOpen && <UserPopup className={`z-50`}/>}

              <button ref={cartRef}>
                <Image src={cart} className="" />
              </button>
              {cartOpen && (
                <AddToCart className="absolute top-[165px] right-[100px] z-50" />
              )}
            </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Header;
