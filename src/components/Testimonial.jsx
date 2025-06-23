import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { TestimonialData } from "../constants/TestimonialData";

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
                <p className="text-sm leading-normal mb-4"> {description} </p>

                <div className="flex items-center gap-4">
                  <img src={imageUrl} alt="author" className="h-20 w-h-20 rounded-full" />

                  <div>
                    <h3 className="text-lg font-medium font-poppins"> {username} </h3>
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
