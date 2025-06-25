import { useState } from "react";
import CategoryList from "../components/CategoryList";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";

const Shop = () => {
  const [currentCategory, setCurrentCategory] = useState("all");

  return (
    <div>
      <Navbar />

      <div className="container">
        <Breadcrumb />

        <div className="flex flex-wrap items-start justify-between gap-6 xl:flex-row">
          <div className="w-full xl:sticky xl:top-0 xl:flex-1">
            <h2 className="mb-5 font-poppins text-xl font-medium">
              Category List
            </h2>

            <CategoryList
              currentCategory={currentCategory}
              setCurrentCategory={setCurrentCategory}
            />
          </div>

          <div className="w-full xl:w-4/5">
            <ProductList currentCategory={currentCategory} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
