import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCategory = async () => {
  const resp = await axios("https://dummyjson.com/products/categories");
  return resp.data;
  
};

const useCategoryList = () => {
  return useQuery({
    queryKey: ["categoryList"],
    queryFn: fetchCategory,
  });
};

export default useCategoryList;
