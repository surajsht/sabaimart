import Cta from "../components/Cta";
import FeaturedCategory from "../components/FeaturedCategory";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import ProductTab from "../components/productTab/ProductTab";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedCategory />
      <FeaturedProducts />
      <Cta />
      <ProductTab />
      <Testimonial />
    </>
  );
};

export default Home;
