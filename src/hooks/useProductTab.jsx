import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = async (category) => {
  const resp = await axios.get(
    `https://dummyjson.com/products/category/${category}`,
  );

  return resp.data.products;
};

const useProductTab = (category) => {
  return useQuery({
    queryKey: ["productTab", category],
    queryFn: () => fetchData(category),
    staleTime: 60000,
  });
};

export default useProductTab;
