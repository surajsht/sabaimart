import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import shuffleArray from "../util/shuffleArray";

const fetchCategory = async () => {
  const resp = await axios.get("https://dummyjson.com/products/categories");
  const allCategories = resp.data;
  const randomCategories = shuffleArray(allCategories);
  return randomCategories;
};

const useRandomCategory = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: fetchCategory,
  });
};

export default useRandomCategory;
