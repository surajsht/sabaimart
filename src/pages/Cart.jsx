import Breadcrumb from "../components/Breadcrumb";
import CartDetails from "../components/cart/CartDetails";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FeaturedProducts from "../components/FeaturedProducts";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Breadcrumb />
        <CartDetails />
      </div>
      <FeaturedProducts />
      <Footer />
    </>
  );
};

export default Cart;
