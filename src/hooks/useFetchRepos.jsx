import { useEffect, useState } from "react";
import axios from "axios";

const useFetchRepos = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchRepos = async (page) => {
    try {
      const date = new Date();
      date.setDate(date.getDate() - 10);
      const formattedDate = date.toISOString().split("T")[0];

      const response = await axios.get(
        `https://api.github.com/search/repositories?q=created:>${formattedDate}&sort=stars&order=desc&page=${page}`
      );

      const newRepos = response.data.items;
      setRepos((prevRepos) => [...prevRepos, ...newRepos]);
      setHasMore(newRepos.length > 0);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    }
  };

  useEffect(() => {
    fetchRepos(page);
  }, [page]);

  const fetchNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return { repos, fetchNextPage, hasMore };
};

export default useFetchRepos;
