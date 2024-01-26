import React from "react";
import logoImg from "../img/bookLogo.png";

const NavComponents = () => {
  return (
    <nav className=" flex justify-between items-center border-b border-gray-500 mb-6 top-0 bg-white ">
      <h1 className=" bg-gray-200 rounded-full border-2 border-gray-600 ">
        <img src={logoImg} alt="logo.png" className=" w-20 h-20" />
      </h1>
      <div>
        <div className=" flex gap-2 items-center text-white bg-gray-600 border-2 border-gray-300 px-2 rounded-lg">
          <div>Menu</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default NavComponents;
