import { useEffect, useState } from "react";

const usePagination = (total = 0, limit = 10, dependencies = []) => {
  const [currentSkip, setCurrentSkip] = useState(0);
  const currentPage = Math.floor(currentSkip / limit) + 1;

  const getNextPage = () => {
    if (currentSkip + limit < total) {
      setCurrentSkip((prev) => prev + limit);
    }
  };

  const getPrevPage = () => {
    if (currentSkip - limit >= 0) {
      setCurrentSkip((prev) => prev - limit);
    }
  };

  const resetPagination = () => {
    setCurrentSkip(0);
  };

  useEffect(() => {
    resetPagination();
  }, dependencies);

  return {
    currentSkip,
    setCurrentSkip,
    currentPage,
    getNextPage,
    getPrevPage,
    resetPagination,
  };
};

export default usePagination;
