import { useState } from "react";
import ProductTabHeader from "./ProductTabHeader";
import ProductTabBody from "./ProductTabBody";

const ProductTab = () => {
  const [currentTab, setCurrentTab] = useState("home-decoration");

  return (
    <div className="container mt-12">
      <ProductTabHeader currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <ProductTabBody currentTab={currentTab} />
    </div>
  );
};

export default ProductTab;
