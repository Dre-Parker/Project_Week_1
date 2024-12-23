import React from "react";
import { Link } from "react-router-dom";

const companyLogo = [
  { id: 1, img: "public/images/category/dragonball-z-anime-logo.png", width:"20px", height:"70px"},
  { id: 2, img: "public/images/category/naruto-anime-logo.png",width:"200px",height:"70px" },
  { id: 3, img: "public/images/category/Demon-Slayer-Entertainment-District-Arc.png",width:"200px",height:"70px" },
  { id: 4, img: "public/images/category/attack-on-titan-anime-logo.png",width:"200px",height:"70px" },
  { id: 5, img: "/images/company/brand5.png" },
];

const Category = () => {
  return (
    <div className="max-w-screen-2xl container xl:px-28 px-4 py-16">
      {/* brand logo */}
      <div className="flex items-center justify-around flex-wrap gap-4 py-5">
        {companyLogo.map(({ id, img }) => (
          <div key={id}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>

      {/* category grid */}
      <div className="flex flex-col md:flex-row items-center gap-4 mt-8">
        <p className="font-semibold md:-rotate-90 uppercase text-center bg-black text-white md:p-1.5 p-2 rounded-sm inline-flex">
          Explore new and popular anime merchandise
        </p>
        <div>
          <Link to="/">
            <img src="public/images/category/61dV1xk2omL._AC_UF1000,1000_QL80_.jpg" width={120}height={120} alt="" className="w-full hover:scale-105 transition-all duration-200" />
          </Link>
        </div>
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-2">
            <Link to="/">
              <img
                src="/images/category/image2.png"
                alt=""
                className="hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/">
              <img
                src="/images/category/image3.png"
                alt=""
                className="hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/">
              <img
                src="/images/category/image4.png"
                alt=""
                className="hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/">
              <img
                src="/images/category/image5.png"
                alt=""
                className="hover:scale-105 transition-all duration-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
