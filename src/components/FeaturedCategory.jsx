import useRandomCategory from "../hooks/useRandomCategory";
import { CategoryImages } from "../constants/CategoryImages";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { LazyLoadImage } from "react-lazy-load-image-component";

const FeaturedCategory = () => {
  const { data, isLoading, error } = useRandomCategory();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mt-14">
      <h2 className="font-semi-bold mb-6 font-poppins text-2xl">
        Featured Categories
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
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
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className="custom-swiper"
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item?.slug}>
              <div className="flex flex-col items-center">
                <div className="relative mb-2 h-44 w-full rounded-lg bg-gray-100">
                  <LazyLoadImage
                    alt={item?.slug || "category image"}
                    src={CategoryImages[item.slug]}
                    height="100%"
                    width="100%"
                    effect="blur"
                    placeholderSrc="/fallback.jpg"
                    className="mx-auto h-full w-full object-contain"
                  />
                </div>

                <h2 className="mt-4 text-center text-xl font-medium">
                  {item?.name}
                </h2>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default FeaturedCategory;
