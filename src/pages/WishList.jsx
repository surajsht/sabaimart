import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import WishListDetails from "../components/WishListDetails";

const WishList = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Breadcrumb />
        <WishListDetails />
      </div>
      <FeaturedProducts />
      <Footer />
    </>
  );
};

export default WishList;
