import useProductTab from "../../hooks/useProductTab";

const ProductTabBody = ({ currentTab }) => {
  const { data, isLoading, error } = useProductTab(currentTab);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div> Error: {error.message} </div>;

  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap">
      {data.map((product) => {
        return (
          <div key={product?.id} className="sm:w-[calc(50%-12px)] lg:w-[calc(33.333333%-16px)]">
            <div className="relative mb-2 bg-gray-100">
              <img
                src={product?.thumbnail}
                alt={product?.title || "product-image"}
                className="h-72 w-full rounded-lg object-contain"
              />
              {product?.discountPercentage > 0 && (
                <span className="absolute left-4 top-4 rounded bg-red-500 px-2 py-1 text-xs text-white">
                  {Math.floor(product?.discountPercentage)}% OFF
                </span>
              )}
            </div>

            <div>
              {product?.availabilityStatus === "In Stock" ? (
                <span className="mb-4 text-[13px] text-green-600">
                  Stock Available
                </span>
              ) : (
                <span className="mb-4 text-[13px] text-red-500">
                  Out Of Stock
                </span>
              )}

              <h3 className="font-bold tracking-wide mb-2 font-poppins text-sm">
                {product?.title}
              </h3>

              <div className="flex">
                <span className="mr-1 align-top text-xs font-bold">$</span>
                <span className="text-sm font-bold">{product?.price}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductTabBody;
