import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const [total, setTotal] = useState(0);

  const cart = useSelector((state) => state.cart.value);

  useEffect(() => {
    const calculateTotal = cart.reduce((acc, cur) => {
      return (acc += cur.quantity * cur.price);
    }, 0);

    setTotal(calculateTotal);
  }, [cart]);

  return (
    <div className="flex-1 rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-0 lg:w-96 lg:flex-auto">
      <h2 className="mb-4 text-xl font-semibold text-gray-800">
        Order Summary
      </h2>

      <div className="space-y-3 border-b pb-4">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>Subtotal</span>
          <span>$ {total.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>Shipping</span>
          <span>$ 100</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 text-lg font-semibold text-gray-800">
        <span>Total</span>
        <span>$ {(total + 100).toFixed(2)}</span>
      </div>

      <button className="mt-6 w-full rounded-lg border border-blue-600 bg-blue-600 px-4 py-2 text-center text-white transition hover:bg-blue-700">
        Checkout
      </button>
    </div>
  );
};

export default CartSummary;
