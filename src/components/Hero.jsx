import { LazyLoadImage } from "react-lazy-load-image-component";

const Hero = () => {
  return (
    <section className="h-[600px] w-screen">
      <div className="container relative flex h-full items-center justify-start overflow-hidden rounded-2xl">
        <div className="absolute left-0 right-0 top-0 z-0 h-full w-full">
          <LazyLoadImage
            alt="SabaiMart Hero"
            src="/main-banner.webp"
            height="100%"
            width="100%"
            effect="blur"
            placeholderSrc="/fallback.jpg"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative flex flex-col items-start gap-4 lg:w-1/2">
          <h1 className="leading-tigh text-4xl font-bold text-gray-900 md:text-5xl md:leading-tight">
            SabaiMart — <br /> Sabai Ko Lagi, Sabai Thau Ma!
          </h1>
          <p className="text-lg text-gray-700">
            Shop groceries, fashion, electronics and more in one place.
          </p>
          <button className="rounded-xl bg-blue-600 px-6 py-3 text-lg text-white transition hover:bg-blue-700">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
