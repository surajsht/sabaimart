import CartDetails from "../components/cart/CartDetails";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <CartDetails />
      </div>
      <Footer />
    </>
  );
};

export default Cart;
