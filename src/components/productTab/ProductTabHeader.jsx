import { TabOptions } from "../../constants/TabOptions";

const ProductTabHeader = ({ currentTab, setCurrentTab }) => {
  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h2 className="mb-1 font-poppins text-2xl font-semibold">
          New Arrivals
        </h2>
        <p className="text-base">
          Shop online for new arrivals and get free shipping!
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        {TabOptions.map((btn) => {
          const { id, label, slug } = btn;

          return (
            <button
              className={currentTab === slug ? "text-red-500" : "text-black"}
              onClick={() => setCurrentTab(slug)}
              key={id}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductTabHeader;
