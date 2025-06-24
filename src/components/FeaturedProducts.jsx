import useRandomProuducts from "../hooks/useRandomProuducts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { LazyLoadImage } from "react-lazy-load-image-component";

const FeaturedProducts = () => {
  const { data, isLoading, error } = useRandomProuducts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message} </div>;

  return (
    <div className="container mt-14">
      <h2 className="font-semi-bold mb-8 font-poppins text-2xl">
        Featured Products
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={800}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
        className="custom-swiper"
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item?.id}>
              <div className="relative mb-2 rounded-lg bg-gray-100 h-80 w-full">
                <LazyLoadImage
                  alt={item?.title || "product-image"}
                  src={item?.thumbnail}
                  height="100%"
                  width="100%"
                  effect="blur"
                  placeholderSrc="/fallback.jpg"
                  className="h-full w-full object-cover"
                />
                {item?.discountPercentage > 0 && (
                  <span className="absolute left-4 top-4 rounded bg-red-500 px-2 py-1 text-xs text-white">
                    {Math.floor(item?.discountPercentage)}% OFF
                  </span>
                )}
              </div>

              <div>
                {item?.availabilityStatus === "In Stock" ? (
                  <span className="mb-1 block text-[13px] text-green-600">
                    Stock Available
                  </span>
                ) : (
                  <span className="mb-1 block text-[13px] text-red-500">
                    Out Of Stock
                  </span>
                )}

                <h3 className="mb-2 font-poppins text-sm font-bold tracking-wide">
                  {item?.title}
                </h3>

                <div className="flex">
                  <span className="mr-1 align-top text-xs font-semibold">
                    $
                  </span>
                  <span className="text-sm font-semibold">{item?.price}</span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default FeaturedProducts;
