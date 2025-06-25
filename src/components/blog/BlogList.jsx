import { useState } from "react";
import useBlog from "../../hooks/useBlog";
import { LazyLoadImage } from "react-lazy-load-image-component";

const BlogList = () => {
  const [pageSkip, setPageSkip] = useState(0);

  const { data, isLoading, error } = useBlog(pageSkip);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div> Error: {error.message} </div>;

  const total = data?.resp?.data?.total || 0;
  const limit = 10;
  const currentPage = Math.floor(pageSkip / limit) + 1;

  const nextPage = () => {
    if (pageSkip + limit < total) {
      setPageSkip((prev) => prev + limit);
    }
  };

  const prevPage = () => {
    if (pageSkip - limit > 0) {
      setPageSkip((prev) => prev - limit);
    }
  };

  return (
    <div>
      <main className="flex flex-col flex-wrap gap-6 md:flex-row">
        {data?.postWithImage.map((blog) => {
          return (
            <article
              key={blog?.id}
              className="md:w-[calc(50%-12px)] lg:w-[calc(33.333333%-16px)] 2xl:w-[calc(25%-18px)]"
            >
              <div className="mb-3 h-56 w-full">
                <LazyLoadImage
                  alt="thumbnail image"
                  src={blog?.image}
                  height="100%"
                  width="100%"
                  effect="blur"
                  placeholderSrc="/fallback.jpg"
                  className="h-full w-full object-cover"
                />
              </div>

              <h2 className="mb-2 font-poppins text-xl font-semibold leading-[1.3] tracking-wide">
                {blog?.title.length > 60
                  ? blog.title.slice(0, 60) + "..."
                  : blog.title}
              </h2>

              <p className="text-base">
                {blog?.body.length > 110
                  ? blog.body.slice(0, 110) + "..."
                  : blog.body}
              </p>
            </article>
          );
        })}
      </main>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          className="transition disabled:cursor-not-allowed disabled:opacity-50 tracking-wide"
          onClick={prevPage}
          disabled={pageSkip - limit <= 0}
        >
          Prev
        </button>

        <span className="text-xl font-semibold font-poppins"> {currentPage} </span>

        <button
          className="transition disabled:cursor-not-allowed disabled:opacity-50 tracking-wide"
          onClick={nextPage}
          disabled={pageSkip + limit >= total}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogList;
