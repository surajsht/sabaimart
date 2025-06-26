import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";

const CartList = () => {
  const cartItems = useSelector((state) => state.cart.value);

  console.log(cartItems);

  return (
    <div>
      {cartItems.map((item) => {
        return (
          <div
            key={item.id}
            className="flex items-center justify-between gap-4 rounded border p-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-20 w-20 rounded object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-500">
                  ${item.price} × {item.quantity}
                </p>
              </div>
            </div>

            <button className="text-red-500 hover:text-red-600">
              <FaTrash />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CartList;
