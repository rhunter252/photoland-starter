import React from "react";
// icons
import { FiX } from "react-icons/fi";
// link
import { Link } from "react-router-dom";
// useFecth hook
import useFetch from "../hooks/useFetch";

const CategoryNavMobile = ({ setCatnavMobile }) => {
  // get categories
  const { data } = useFetch("/brands");

  // console.log(data);

  return (
    <div className="w-full h-full bg-primary p-8">
      {/* close icon */}
      <div
        onClick={() => setCatnavMobile(false)}
        className="flex justify-end mb-8 cursor-pointer"
      >
        <FiX className="text-3xl" />
      </div>
      <div className="flex flex-col gap-y-8">
        {data?.map((brands) => {
          return (
            <Link
              to={`/search?query=${brands.attributes.Brand}`}
              className="uppercase font-medium"
              onClick={() => setCatnavMobile(false)}
              key={brands.id}
            >
              {brands.attributes.Brand} Sneakers
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryNavMobile;
