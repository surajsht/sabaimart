import { useSelector } from "react-redux";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const WishListDetails = () => {
  const wishListItems = useSelector((item) => item.wishlist.value);

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold text-gray-800">My Wishlist</h1>

      <div className="space-y-6">
        {wishListItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-4 rounded-xl border border-gray-200 p-4 md:flex-row md:items-center"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="h-40 w-40 rounded-lg object-cover"
            />

            <div className="flex flex-1 flex-col gap-2">
              <h2 className="text-xl font-semibold text-gray-800">
                <Link
                  to={`/product/${item.id}`}
                  className="hover:text-blue-600"
                >
                  {item.title}
                </Link>
              </h2>
              <span className="text-sm text-gray-500">
                Category: {item.category}
              </span>
              <p className="line-clamp-3 text-sm text-gray-600">
                {item.description}
              </p>
              <span className="text-lg font-bold text-blue-600">
                Rs. {item.price}
              </span>
            </div>

            <div className="flex flex-col gap-2 md:ml-auto md:w-40">
              <button className="flex items-center justify-center gap-2 rounded-lg border border-blue-600 px-3 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white">
                <FaShoppingCart />
                Add to Cart
              </button>
              <button className="flex items-center justify-center gap-2 rounded-lg border border-red-500 px-3 py-2 text-sm font-medium text-red-500 transition hover:bg-red-500 hover:text-white">
                <FaTrash />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishListDetails;
