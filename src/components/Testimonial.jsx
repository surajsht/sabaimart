import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { TestimonialData } from "../constants/TestimonialData";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Testimonial = () => {
  return (
    <div className="container pt-12">
      <div className="mb-8 text-center">
        <h2 className="mb-2 font-poppins text-4xl font-medium">
          What Our Clients Say
        </h2>
        <p> There are many variations of passages of lorem Ipsum available</p>
      </div>

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
          1024: {
            slidesPerView: 3,
          },
        }}
        className="custom-swiper"
      >
        {TestimonialData.map((testimonial) => {
          const { id, title, description, imageUrl, username, position } =
            testimonial;

          return (
            <SwiperSlide key={id}>
              <div className="rounded-xl bg-gray-100 p-7">
                <h2 className="mb-2 font-poppins text-lg font-medium">
                  {title}
                </h2>
                <p className="mb-4 text-sm leading-normal"> {description} </p>

                <div className="flex items-center gap-4">
                  <div className="w-h-20 h-20">
                    <LazyLoadImage
                      alt="author"
                      src={imageUrl}
                      height="100%"
                      width="100%"
                      effect="blur"
                      placeholderSrc="/fallback.jpg"
                      className="w-h-full h-full rounded-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="font-poppins text-lg font-medium">
                      {username}
                    </h3>
                    <span className="text-sm"> {position} </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
