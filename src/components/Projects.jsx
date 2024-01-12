import React from "react";
import grocery from "../assets/portfolio/grocery.png";
import batman from "../assets/portfolio/batman.png";
import color from "../assets/portfolio/color.png";
import dog from "../assets/portfolio/dog.png";
import { MdLiveTv } from "react-icons/md";
import { IoCodeSlash } from "react-icons/io5";
import menu from "../assets/portfolio/menu.png"
import keeper from "../assets/portfolio/keeper.jpg";

const Project = () => {
  const portfolios = [
    {
      id: 1,
    

      src: batman,
      code : "https://github.com/sushantbro11/MovieLand",
      demo : "https://boisterous-malabi-21b1b8.netlify.app/",
    },
    {
      id: 2,
     

      src: dog,
      code : "https://github.com/sushantbro11/bootstraptindog",
      demo : "https://sushantbro11.github.io/bootstraptindog/",
    },
    {
      id: 3,
      src: menu,
      code : "https://github.com/sushantbro11/React-Learning/tree/main/Dynamic-Menu",
      demo : "https://dynamic-menu17.netlify.app/",
    },
    {
      id: 4,
      src: color,
      code : "https://github.com/sushantbro11/React-Learning/tree/main/Color-Generator",
      demo : "https://color-generator1738.netlify.app/",
    },
    {
      id: 5,
      src: grocery,
      code: "https://github.com/sushantbro11/Grocery-Buddy",
      demo: "https://grocerry-buddy.netlify.app/",
     
    },
    {
      id: 6,
      src: keeper,
      code: "https://github.com/sushantbro11/Keeper",
      demo: "https://keeper12.onrender.com/",
    },
  ];

  const openCodeLink = (code) => {
    window.open(code, "_blank");
  };

  const openDemoLink = (demo) => {
    window.open(demo, "_blank");
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen font-signature1  "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full  ">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mt-20">
          {portfolios.map(({ id, src, code, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className=" rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={() => openDemoLink(demo)}
                  className="flex items-center px-6 py-3 m-4 duration-200 hover:scale-105 text-white rounded-md"
                >
                  <MdLiveTv className="mr-2" /> Demo
                </button>
                <button
                  onClick={() => openCodeLink(code)}
                  className="flex items-center px-6 py-3 m-4 duration-200 hover:scale-105 text-white rounded-md"
                >
                  <IoCodeSlash className="mr-2" /> Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
