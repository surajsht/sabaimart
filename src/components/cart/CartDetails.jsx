import CartList from "./CartList";
import CartSummary from "./CartSummary";

const CartDetails = () => {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:gap-16 lg:items-start">
      <CartList />
      <CartSummary />
    </div>
  );
};

export default CartDetails;
