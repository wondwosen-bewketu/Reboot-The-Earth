import React, { useState } from "react";
import Logo from "../assets/branding.png";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Main header start */}
      <header className="bg-white shadow sticky top-0 z-50 h-20">
        <div className="container mx-auto flex justify-between items-center">
          <a className="flex items-center" href="/">
            <img
 src={Logo} alt="Your Company"
              className="w-28 h-auto" // Adjust the width and height as needed
            />
          </a>
          <button className="lg:hidden text-xl" onClick={toggleMenu}>
            <i
              className={`fa ${
                isOpen ? "fa-close" : "fa-bars"
              } w-fit rounded-md px-4 py-2 hover:bg-[#187b1b] text-black font-semibold mt-2 transition-colors duration-300`}
            ></i>
          </button>
          <nav className="hidden lg:flex lg:items-center w-full lg:w-auto">
            <ul className="lg:flex lg:space-x-4 text-center lg:text-left">
              <li className="py-2 lg:py-0">
                <a
                  href="/"
                  className="block w-fit rounded-md px-4 py-2 hover:bg-[#187b1b] text-black font-semibold mt-2 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li className="py-2 lg:py-0">
                <a
                  href="/service"
                  className="block w-fit rounded-md px-4 py-2 hover:bg-[#187b1b] text-black font-semibold mt-2 transition-colors duration-300"
                >
                  Service
                </a>
              </li>
              <li className="py-2 lg:py-0">
                <a
                  href="/package"
                  className="block w-fit rounded-md px-4 py-2 hover:bg-[#187b1b] text-black font-semibold mt-2 transition-colors duration-300"
                >
                  Package
                </a>
              </li>
              <li className="py-2 lg:py-0">
                <a
                  href="/role"
                  className="block w-fit rounded-md px-4 py-2 hover:bg-[#187b1b] text-black font-semibold mt-2 transition-colors duration-300"
                >
                  Role
                </a>
              </li>
              <li className="py-2 lg:py-0">
                <a
                  href="/steps"
                  className="block w-fit rounded-md px-4 py-2 hover:bg-[#187b1b] text-black font-semibold mt-2 transition-colors duration-300"
                >
                  Steps
                </a>
              </li>
              <li className="py-2 lg:py-0">
                <a
                  href="/contact"
                  className="block w-fit rounded-md px-4 py-2 hover:bg-[#187b1b] text-black font-semibold mt-2 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 lg:hidden">
              {/* <a
                href="/login"
                className="block w-fit rounded-md px-4 py-2 hover:bg-[#187b1b] text-black font-semibold mt-2 transition-colors duration-300"
              >
                <i className="fa fa-sign-in" /> Login
              </a> */}

              <a
                href="/signup"
                className="block w-fit rounded-md px-4 py-2 hover:bg-[#187b1b] text-black font-semibold mt-2 transition-colors duration-300"
              >
                <i className="fa fa-user" /> Register
              </a>
            </div>
          </nav>
        </div>
      </header>
      {/* Main header end */}

      {/* Sidenav start */}
      <nav
        id="sidebar"
        className={`fixed inset-0 bg-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden z-50`}
      >
        <div className="flex justify-between p-4">
          <div></div>
          <button className="text-xl" onClick={toggleMenu}>
            <i className="fa fa-close w-fit rounded-md px-4 py-2 hover:bg-[#187b1b] text-black font-semibold mt-2 transition-colors duration-300"></i>
          </button>
        </div>
        <div className="p-4">
          <ul className="space-y-4">
            <li>
              <a
                href="/"
                className="block w-fit rounded-md px-4 py-2 hover:bg-[#187b1b] text-black font-semibold mt-2 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/service"
                className="block w-fit rounded-md px-4 py-2 hover:bg-[#187b1b] text-black font-semibold mt-2 transition-colors duration-300"
              >
                Service
              </a>
            </li>
            <li>
              <a
                href="/package"
                className="block w-fit rounded-md px-4 py-2 hover:bg-[#187b1b] text-black font-semibold mt-2 transition-colors duration-300"
              >
                Package
              </a>
            </li>
            <li>
              <a
                href="/role"
                className="block w-fit rounded-md px-4 py-2 hover:bg-[#187b1b] text-black font-semibold mt-2 transition-colors duration-300"
              >
                Role
              </a>
            </li>
            <li>
              <a
                href="/steps"
                className="block w-fit rounded-md px-4 py-2 hover:bg-[#187b1b] text-black font-semibold mt-2 transition-colors duration-300"
              >
                Steps
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block w-fit rounded-md px-4 py-2 hover:bg-[#187b1b] text-black font-semibold mt-2 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
            {/* <li>
              <a
                href="/login"
                className="block w-fit rounded-md px-4 py-2 hover:bg-[#187b1b] text-black font-semibold mt-2 transition-colors duration-300"
              >
                <i className="fa fa-sign-in" /> Login
              </a>
            </li> */}
            <li>
              <a
                href="/signup"
                className="block w-fit rounded-md px-4 py-2 hover:bg-[#187b1b] text-black font-semibold mt-2 transition-colors duration-300"
              >
                <i className="fa fa-user" /> Register
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Sidenav end */}
    </>
  );
}
