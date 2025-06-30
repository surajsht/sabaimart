import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseProductQuantity,
  decreaseProductQuantity,
  removeFromCart,
} from "../../redux/slices/cartSlice";

const CartList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.value);

  if (cartItems.length === 0) {
    return (
      <div className="w-full py-12 text-center text-gray-500">
        Your cart is empty.
      </div>
    );
  }

  return (
    <div className="w-full space-y-6">
      <div className="hidden grid-cols-12 gap-4 border-b pb-3 text-sm font-semibold text-gray-600 md:grid">
        <div className="col-span-5">Product</div>
        <div className="col-span-2 text-center">Price</div>
        <div className="col-span-2 text-center">Quantity</div>
        <div className="col-span-2 text-center">Total</div>
        <div className="col-span-1 text-center">Remove</div>
      </div>

      <div className="space-y-5">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-wrap items-center justify-end gap-4 border-b pb-5 md:grid md:grid-cols-12 md:items-center md:gap-4"
          >
            <div className="flex w-full items-center gap-4 md:col-span-5">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-20 w-20 rounded object-contain"
              />
              <div>
                <h2 className="text-base font-semibold">{item.title}</h2>
                <p className="text-sm capitalize text-gray-500">
                  {item.category}
                </p>

                <div className="mt-2 text-sm font-medium text-gray-800 md:hidden">
                  ${item.price}
                </div>
              </div>
            </div>

            <div className="hidden text-center text-sm text-gray-800 md:col-span-2 md:block">
              ${item.price}
            </div>

            <div className="flex w-auto items-center gap-2 md:col-span-2 md:justify-center">
              <button
                className="rounded border px-2 py-1 text-sm"
                onClick={() => dispatch(decreaseProductQuantity(item.id))}
                disabled={item.quantity === 1}
              >
                <FaMinus />
              </button>
              <p>{item.quantity}</p>
              <button
                className="rounded border px-2 py-1 text-sm"
                onClick={() => dispatch(increaseProductQuantity(item.id))}
              >
                <FaPlus />
              </button>
            </div>

            <div className="w-auto text-sm font-semibold text-gray-900 md:col-span-2 md:text-center">
              ${(item.price * item.quantity).toFixed(2)}
            </div>

            <div className="flex w-auto justify-end md:col-span-1 md:justify-center">
              <button
                className="text-red-500 hover:text-red-600"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartList;
