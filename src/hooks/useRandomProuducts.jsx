import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import shuffleArray from "../util/shuffleArray";

const fetchProducts = async () => {
  const resp = await axios.get("https://dummyjson.com/products?limit=100");
  const data = resp.data;

  return shuffleArray(data.products);
};

const useRandomProuducts = () => {
  return useQuery({
    queryKey: ["randomProduct"],
    queryFn: fetchProducts,
  });
};

export default useRandomProuducts;
