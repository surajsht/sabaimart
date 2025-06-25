import { useState } from "react";
import useCategoryList from "../hooks/useCategoryList";

const CategoryList = ({ setCurrentCategory, currentCategory }) => {
  const [showAll, setShowAll] = useState(false);
  const { data, isLoading, error } = useCategoryList();

  if (isLoading) return <div> Loading... </div>;
  if (error) return <div> Error: {error.message}</div>;

  const visibleItems = showAll ? data : data.slice(0, 8);

  return (
    <>
      {/* Desktop view  */}
      <div className="hidden xl:block">
        <ul className="flex flex-col gap-3">
          <li
            key="all"
            className={`cursor-pointer ${currentCategory === "all" ? "text-blue-500" : "text-black"}`}
            onClick={() => setCurrentCategory("all")}
          >
            All
          </li>
          {visibleItems.map((category) => {
            return (
              <li
                key={category.slug}
                className={`cursor-pointer ${currentCategory === category.slug ? "text-blue-500" : "text-black"}`}
                onClick={() => setCurrentCategory(category.slug)}
              >
                {category.name}
              </li>
            );
          })}
        </ul>

        <button
          className="mt-4 rounded bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less -" : "Show More +"}
        </button>
      </div>

      {/* Mobile view */}
      <div className="xl:hidden">
        <ul className="flex items-center gap-2 overflow-x-auto">
          <button
            key="all"
            className={`rounded-full border px-4 py-1 ${
              currentCategory === "all"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-800"
            }`}
            onClick={() => setCurrentCategory("all")}
          >
            All
          </button>

          {data.map((category) => {
            return (
              <button
                key={category.slug}
                onClick={() => setCurrentCategory(category.slug)}
                className={`whitespace-nowrap rounded-full border px-4 py-1 ${
                  currentCategory === category.slug
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default CategoryList;
