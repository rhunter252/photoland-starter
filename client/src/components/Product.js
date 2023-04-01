import React from "react";
// link
import { Link } from "react-router-dom";

const Product = ({ shoe }) => {
  console.log(shoe);
  return (
    <Link to={`/shoe/${shoe.id}`}>
      <div className="grad w-full h-[362px] rounded-[8px] overflow-hidden relative group">
        {/* badge */}
        {shoe.attributes.isNew ? (
          <div className="absolute bg-accent text-primary text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10">
            new
          </div>
        ) : (
          ""
        )}
        {/* image */}
        <div className="w-full h-[200px] flex items-center justify-center relative">
          <img
            className="w-[300px] h-[300px] group-hover:scale-90 transition-all object-contain"
            src={`http://localhost:1338${shoe.attributes.image.data[0].attributes.url}`}
            alt=""
          />
        </div>
        {/* text */}
        <div className="px-6 pb-8 flex flex-col">
          {/* category title */}
          <div className="text-sm text-accent capitalize mb-2">
            {shoe.attributes.brands.data[0].attributes.Brand}
          </div>
          {/* title */}
          <div className="text-[15px] mb-4 lg:mb-9">
            {shoe.attributes.title.substring(0, 35)}...
          </div>
          {/* price */}
          <div className="text-lg text-accent">${shoe.attributes.price}</div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
