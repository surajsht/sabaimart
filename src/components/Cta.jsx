const Cta = () => {
  return (
    <div className="relative mt-12">
      <img
        src="/cta.webp"
        alt="call to action"
        className="absolute left-0 right-0 top-0 z-0 h-full w-full object-cover"
      />

      <div className="container relative flex flex-col items-end py-32 2xl:py-40">
        <div className="flex flex-col items-start gap-4 md:w-3/4 lg:w-3/5 xl:w-1/2 2xl:gap-6">
          <span className="font-medium"> THIS WEEK'S HIGHLIGHTS </span>
          <h2 className="font-poppins text-4xl font-semibold lg:text-[52px] lg:leading-[1.2]">
            Drop Cut Blue Necklace With Earrings Set
          </h2>
          <p className="text-lg">
            Awesome products for the dynamic urban lifestyle
          </p>
          <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition duration-300 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
