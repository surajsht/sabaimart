import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProducts = async (category, currentSkip) => {
  if (category === "all") {
    const resp = await axios.get(
      `https://dummyjson.com/products?limit=10&skip=${currentSkip}`,
    );
    return resp.data;
  }

  const resp = await axios.get(
    `https://dummyjson.com/products/category/${category}?limit=10&skip=${currentSkip}`,
  );
  return resp.data;
};

const useProductList = (category, currentSkip) => {
  return useQuery({
    queryKey: ["productList", category, currentSkip],
    queryFn: () => fetchProducts(category, currentSkip),
  });
};

export default useProductList;
