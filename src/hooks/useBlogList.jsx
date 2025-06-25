import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchBlog = async (pageSkip) => {
  const resp = await axios.get(
    `https://dummyjson.com/posts?limit=10&skip=${pageSkip}`,
  );

  const postWithImage = resp.data?.posts.map((post) => {
    return { ...post, image: `https://picsum.photos/seed/${post.id}/600/400` };
  });

  return { resp, postWithImage };
};

const useBlogList = (pageSkip) => {
  return useQuery({
    queryKey: ["blog", pageSkip],
    queryFn: () => fetchBlog(pageSkip),
    placeholderData: keepPreviousData,
  });
};

export default useBlogList;
