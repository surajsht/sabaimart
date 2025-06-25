import { useEffect, useState } from "react";
import useProductList from "../hooks/useProductList";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const ProductList = ({ currentCategory }) => {
  const [currentSkip, setCurrentSkip] = useState(0);

  const { data, isLoading, error } = useProductList(
    currentCategory,
    currentSkip,
  );

  useEffect(() => {
    setCurrentSkip(0);
  }, [currentCategory]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const total = data?.total;
  const limit = 10;
  const currentPage = Math.floor(currentSkip / limit) + 1;

  const getNextPage = () => {
    if (currentSkip + limit < total) {
      setCurrentSkip((prev) => prev + limit);
    }
  };

  const getPrevPage = () => {
    if (currentSkip - limit >= 0) {
      setCurrentSkip((prev) => prev - limit);
    }
  };

  return (
    <>
      <div className="flex flex-wrap items-center gap-6 sm:flex-row">
        {data?.products?.map((product) => {
          return (
            <div
              key={product.id}
              className="w-full rounded-xl border bg-white p-4 shadow sm:w-[calc(50%-12px)] lg:w-[calc(33.333333%-16px)]"
            >
              <div className="relative">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-64 w-full rounded-lg bg-gray-100 object-contain"
                />

                <span className="absolute left-4 top-4 rounded bg-red-500 px-2 py-1 text-xs font-semibold text-white">
                  {Math.floor(product.discountPercentage)}% OFF
                </span>
              </div>

              <div className="mt-4">
                <h3 className="mb-1 text-lg font-bold">{product.title}</h3>
                <p className="mb-2 text-sm text-gray-500">{product.brand}</p>

                <div className="mb-2 flex items-center justify-between">
                  <div className="text-xl font-semibold text-blue-600">
                    ${product.price}
                  </div>
                  <div
                    className={`rounded px-2 py-0.5 text-xs font-medium ${
                      product.availabilityStatus === "In Stock"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {product.availabilityStatus}
                  </div>
                </div>

                <div className="mb-3 flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>

                <div className="mb-3 mt-2 flex flex-wrap gap-2">
                  {product.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-700"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-gray-500">
                  {product.shippingInformation}
                </p>

                <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-2 text-white transition hover:bg-blue-700">
                  <FaShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {data?.total > 10 && (
        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            className="tracking-wide transition disabled:cursor-not-allowed disabled:opacity-50"
            onClick={getPrevPage}
            disabled={currentSkip - limit < 0}
          >
            Prev
          </button>
          <span> {currentPage} </span>
          <button
            className="tracking-wide transition disabled:cursor-not-allowed disabled:opacity-50"
            onClick={getNextPage}
            disabled={currentSkip + limit > total}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default ProductList;
