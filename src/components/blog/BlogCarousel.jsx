import { BlogData } from "../../constants/BlogData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const BlogCarousel = () => {
  return (
    <div className="container mt-12">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div className="max-w-[70%]">
          <h2 className="mb-1 font-poppins text-2xl font-semibold">
            New Arrivals
          </h2>
          <p className="text-base">
            Shop online for new arrivals and get free shipping!
          </p>
        </div>

        <button className="flex items-center gap-2">
          <Link to="/blog">All Blogs</Link>
          <MdKeyboardDoubleArrowRight />
        </button>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 8976,
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
          1280: {
            slidesPerView: 4,
          },
        }}
        className="custom-swiper"
      >
        {BlogData.slice(0, 6).map((blog) => {
          const { id, title, description, image } = blog;

          return (
            <SwiperSlide key={id}>
              <article>
                <div className="mb-2 h-64 w-full">
                  <LazyLoadImage
                    alt={title}
                    src={image}
                    height="100%"
                    width="100%"
                    effect="blur"
                    placeholderSrc="/fallback.jpg"
                    className="h-full w-full object-cover"
                  />
                </div>

                <h2 className="mb-2 font-poppins text-lg font-semibold leading-tight tracking-normal">
                  {title}
                </h2>
                <p> {description} </p>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BlogCarousel;
