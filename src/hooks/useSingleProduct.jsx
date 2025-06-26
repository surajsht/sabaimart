import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProduct = async (productId) => {
  const resp = await axios.get(`https://dummyjson.com/products/${productId}`);
  return resp;
};

const useSingleProduct = (productId) => {
  return useQuery({
    queryKey: ["productId", productId],
    queryFn: () => fetchProduct(productId),
  });
};

export default useSingleProduct;
