const ProductTabHeader = ({ currentTab, setCurrentTab }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
      <div>
        <h2 className="mb-1 font-poppins text-2xl font-semibold">
          New Arrivals
        </h2>
        <p className="text-base">
          Shop online for new arrivals and get free shipping!
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        <button
          className={currentTab === "home-decoration" ? "text-red-500" : "text-black"}
          onClick={() => setCurrentTab("home-decoration")}
        >
          Home Decoration
        </button>
        <button
          className={currentTab === "beauty" ? "text-red-500" : "text-black"}
          onClick={() => setCurrentTab("beauty")}
        >
          Beauty
        </button>
        <button
          className={
            currentTab === "mens-shirts" ? "text-red-500" : "text-black"
          }
          onClick={() => setCurrentTab("mens-shirts")}
        >
          Mens Shirts
        </button>
        <button
          className={currentTab === "tops" ? "text-red-500" : "text-black"}
          onClick={() => setCurrentTab("tops")}
        >
          Tops
        </button>
        <button
          className={currentTab === "skin-care" ? "text-red-500" : "text-black"}
          onClick={() => setCurrentTab("skin-care")}
        >
          Skin Care
        </button>
      </div>
    </div>
  );
};

export default ProductTabHeader;
