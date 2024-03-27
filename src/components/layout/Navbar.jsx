import React, { useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import List from "../List";
import LOGO from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import Paragraph from "../Paragraph";
import { useDispatch } from "react-redux";
import { pageName } from "../../slices/breadcrumbSlice";
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  // for breadcrumbs
  let dispatch = useDispatch();

  let handleBreadcrumb = (name) => {
    dispatch(pageName(name));
  };
  // for mobile menu 
  const [menuOpen, setMenuOpen] = useState(false);
  let toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  let closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <nav className="sm:py-[32px] py-4 sticky top-0 w-full left-0 z-50 bg-white">
      <Container>
        <Flex>
          <div className="w-1/3">
            <Link to="/">
              <Image src={LOGO} />
            </Link>
          </div>
          <div className="w-1/3">
            <ul>
              <Flex className="justify-center hidden sm:flex">
                <List
                  onClick={() => handleBreadcrumb("Home")}
                  href="/"
                  text="Home"
                  className="text-secondary hover:text-primary text-[14px] mx-5 font-normal duration-300"
                />
                <List
                  onClick={() => handleBreadcrumb("Shop")}
                  href="shop"
                  text="Shop"
                  className="text-secondary hover:text-primary text-[14px] mx-5 font-normal duration-300"
                />
                <List
                  onClick={() => handleBreadcrumb("Contact")}
                  href="contact"
                  text="Contacts"
                  className="text-secondary hover:text-primary text-[14px] mx-5 font-normal duration-300"
                />
                <List
                  onClick={() => handleBreadcrumb("About")}
                  href="about"
                  text="About"
                  className="text-secondary hover:text-primary text-[14px] mx-5 font-normal duration-300"
                />
                <List
                  onClick={() => handleBreadcrumb("Journal")}
                  href="journal"
                  text="Journal"
                  className="text-secondary hover:text-primary text-[14px] mx-5 font-normal duration-300"
                />
              </Flex>
            </ul>
            {/* mobile menu starts */}
            <div className="sm:hidden flex justify-center" onClick={toggleMenu}>
              <div>
                {menuOpen ? (
                  <RxCross2 className="text-xl cursor-pointer" />
                ) : (
                  <FaBars className="cursor-pointer" />
                )}
              </div>
            </div>
            <ul
              onClick={closeMenu}
              className={`${
                menuOpen ? "left-0" : "left-[-100%]"
              } flex-col justify-center h-fit w-full duration-300 flex text-center absolute bg-white z-40`}
            >
              <List
                onClick={() => handleBreadcrumb("Home")}
                href="/"
                text="Home"
                className="text-secondary hover:text-primary text-[14px] mx-5 font-normal duration-300"
              />
              <List
                onClick={() => handleBreadcrumb("Shop")}
                href="shop"
                text="Shop"
                className="text-secondary hover:text-primary text-[14px] mx-5 font-normal duration-300"
              />
              <List
                onClick={() => handleBreadcrumb("Contact")}
                href="contact"
                text="Contacts"
                className="text-secondary hover:text-primary text-[14px] mx-5 font-normal duration-300"
              />
              <List
                onClick={() => handleBreadcrumb("About")}
                href="about"
                text="About"
                className="text-secondary hover:text-primary text-[14px] mx-5 font-normal duration-300"
              />
              <List
                onClick={() => handleBreadcrumb("Journal")}
                href="journal"
                text="Journal"
                className="text-secondary hover:text-primary text-[14px] mx-5 font-normal duration-300"
              />
            </ul>
            {/* mobile menu ends*/}
          </div>
          <div className="w-1/3 flex gap-2 justify-end">
            <Link>
              <Paragraph text="EN" className="text-sm font-bold text-primary" />
            </Link>
            <Link>
              <Paragraph text="RU" className="text-sm font-normal text-third" />
            </Link>
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
