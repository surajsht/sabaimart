import { useState } from "react";
import useBlogList from "../../hooks/useBlogList";
import { LazyLoadImage } from "react-lazy-load-image-component";
import usePagination from "../../hooks/usePagination";

const BlogList = () => {
  const { data, isLoading, error } = useBlogList(0);

  const total = data?.resp?.data?.total || 0;
  const limit = 10;

  const { currentSkip, currentPage, getNextPage, getPrevPage } = usePagination(
    total,
    limit,
  );

  const {
    data: blogData,
    isLoading: isBlogLoading,
    error: blogError,
  } = useBlogList(currentSkip);

  if (isBlogLoading) return <div>Loading...</div>;
  if (blogError) return <div> Error: {blogError.message} </div>;

  return (
    <div>
      <main className="flex flex-col flex-wrap gap-6 md:flex-row">
        {blogData?.postWithImage.map((blog) => {
          return (
            <article
              key={blog?.id}
              className="md:w-[calc(50%-12px)] lg:w-[calc(33.333333%-16px)] 2xl:w-[calc(25%-18px)]"
            >
              <div className="mb-3 h-56 w-full overflow-hidden">
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
          className="tracking-wide transition disabled:cursor-not-allowed disabled:opacity-50"
          onClick={getPrevPage}
          disabled={currentSkip - limit < 0}
        >
          Prev
        </button>

        <span className="font-poppins text-xl font-semibold">
          {currentPage}
        </span>

        <button
          className="tracking-wide transition disabled:cursor-not-allowed disabled:opacity-50"
          onClick={getNextPage}
          disabled={currentSkip + limit >= total}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogList;
