import React from "react";
// useFetch hook
import useFetch from "../hooks/useFetch";
// link
import { Link } from "react-router-dom";

const CategoryNav = () => {
  const { data } = useFetch("/brands");
  // console.log(data);
  return (
    <aside className="hidden xl:flex">
      <div className="bg-primary flex flex-col w-[286px] h-[500px] rounded-[8px] overflow-hidden">
        <div className="bg-accent py-4 text-primary uppercase font-semibold flex items-center justify-center">
          Browse Categories
        </div>
        <div className="flex flex-col gap-y-6 p-6">
          {data?.map((brand) => {
            return (
              <Link
                to={`/search?query=${brand.attributes.Brand}`}
                className="cursor-pointer uppercase"
                key={brand.id}
              >
                {brand.attributes.Brand}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default CategoryNav;
