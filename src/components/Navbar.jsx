import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickScroll = (val) => {
    const element = document.getElementById(val);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="p-4 md:flex md:items-center md:justify-between">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-lg font-bold text-dark">
            PANSIT ASIU
          </Link>
        </div>
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-300 hover:text-dark focus:text-dark focus:outline-none"
            onClick={handleToggle}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path
                fillRule="evenodd"
                d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "" : "hidden"
        } w-full md:flex md:w-auto md:items-center`}
      >
        <div className="body font-medium md:grow">
          <button
            type="button"
            onClick={() => handleClickScroll("home")}
            className="mt-4 block text-dark md:mt-0 md:ml-6 md:inline-block"
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => handleClickScroll("about")}
            className="mt-4 block text-dark md:mt-0 md:ml-6 md:inline-block"
          >
            About Us
          </button>
          <button
            type="button"
            onClick={() => handleClickScroll("testi")}
            className="mt-4 block text-dark md:mt-0 md:ml-6 md:inline-block"
          >
            Testimonials
          </button>
          <button
            type="button"
            onClick={() => handleClickScroll("order")}
            className="mt-4 block text-dark md:mt-0 md:ml-6 md:inline-block"
          >
            Order
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
