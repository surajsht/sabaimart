import { useParams } from "react-router-dom";
import useSingleProduct from "../hooks/useSingleProduct";
import { FaStar, FaShoppingCart, FaArrowLeft, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import Breadcrumb from "./Breadcrumb";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [imageId, setImageId] = useState(0);

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data, isLoading, error } = useSingleProduct(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div> Error: {error.message} </div>;

  const product = data?.data;

  const incrementQty = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQty = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const toggleWishlist = () => {
    setWishlisted((prev) => !prev);
  };

  const getImageId = (id) => {
    setImageId(id);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
  };

  return (
    <div className="container">
      <Breadcrumb />

      <button
        onClick={() => navigate("/shop")}
        className="mb-4 flex items-center gap-2 text-sm text-blue-600 hover:underline"
      >
        <FaArrowLeft />
        Back to Shop
      </button>

      <div className="flex flex-col gap-8 md:flex-row">
        <div className="w-full md:w-1/2">
          <img
            src={product?.images[imageId]}
            alt={product?.title}
            className="mb-4 w-full rounded-lg bg-gray-100 object-contain"
          />
          <div className="flex gap-2">
            {product?.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`product-${i}`}
                className={`h-20 w-20 rounded-lg border bg-gray-50 object-contain ${i === imageId ? "border-[1px] border-black" : ""}`}
                onMouseOver={(e) => getImageId(i)}
              />
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="mb-2 font-poppins text-2xl font-bold">
            {product?.title}
          </h2>
          <p className="mb-1 text-sm text-gray-500">{product?.brand}</p>

          <div className="mb-4 flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            <span className="text-sm font-medium">{product?.rating}</span>
            <span className="ml-2 text-xs text-gray-500">
              ({product?.reviews.length} reviews)
            </span>
          </div>

          <p className="mb-4 text-gray-700">{product?.description}</p>

          <div className="mb-4 flex items-center gap-4">
            <div className="text-3xl font-bold text-blue-600">
              ${product?.price}
            </div>
            <span className="rounded bg-red-500 px-2 py-1 text-xs text-white">
              {Math.floor(product?.discountPercentage)}% OFF
            </span>
          </div>

          <div
            className={`mb-4 inline-block rounded px-2 py-1 text-xs font-medium ${
              product?.availabilityStatus === "In Stock"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {product?.availabilityStatus}
          </div>

          <p className="mb-3 text-sm text-gray-600">
            {product?.shippingInformation}
          </p>

          <div className="mb-3 flex flex-wrap gap-2">
            {product?.tags.map((tag, i) => (
              <span
                key={i}
                className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-700"
              >
                #{tag}
              </span>
            ))}
          </div>

          <p className="mb-3 text-xs text-gray-500">
            Warranty: {product?.warrantyInformation}
          </p>

          <p className="mb-3 text-xs text-gray-500">
            Return Policy: {product?.returnPolicy}
          </p>

          <div className="mt-6 flex items-center gap-3">
            <button
              onClick={decrementQty}
              className="rounded border px-3 py-1 text-lg font-bold text-gray-600"
            >
              -
            </button>
            <span className="text-base">{quantity}</span>
            <button
              onClick={incrementQty}
              className="rounded border px-3 py-1 text-lg font-bold text-gray-600"
            >
              +
            </button>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <button
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
              onClick={handleAddToCart}
            >
              <FaShoppingCart />
              Add to Cart
            </button>

            <button
              onClick={toggleWishlist}
              className={`flex items-center gap-2 rounded-lg border px-4 py-2 transition ${
                wishlisted
                  ? "border-red-500 text-red-500"
                  : "border-gray-300 text-gray-600 hover:border-red-500 hover:text-red-500"
              }`}
            >
              <FaHeart />
              {wishlisted ? "Wishlisted" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t pt-6">
        <h2 className="mb-5 text-xl font-semibold">Customer Reviews</h2>

        {product?.reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet.</p>
        ) : (
          <div className="flex flex-col gap-6">
            {product?.reviews.map((review, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={`${
                          index < review.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        } text-sm`}
                      />
                    ))}
                    <span className="ml-2 text-sm font-semibold">
                      {review.rating}/5
                    </span>
                  </div>
                  <span className="text-xs text-gray-400">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>

                <p className="mt-3 text-base text-gray-800">{review.comment}</p>

                <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                  <span className="font-medium">By:</span>
                  <span className="text-gray-700">{review.reviewerName}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-10 border-t pt-6 text-xs text-gray-500">
        <p>SKU: {product?.sku}</p>
        <p>Minimum Order: {product?.minimumOrderQuantity}</p>
        <p>
          Dimensions: {product?.dimensions.width} x {product?.dimensions.height}{" "}
          x {product?.dimensions.depth} cm
        </p>
        <p>Weight: {product?.weight} g</p>
        <p>Barcode: {product?.meta.barcode}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
