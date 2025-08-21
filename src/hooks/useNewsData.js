import { useState, useEffect, useCallback } from "react";
import { fetchAllNews } from "../services";

export const useNewsData = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchNews = useCallback(async (keyword) => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchAllNews(keyword);
      setArticles(data);
    } catch (err) {
      console.error("Failed to load news:", err);
      setError(
        "An error occurred while fetching the news. Please try again later."
      );
      setArticles([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    searchNews();
  }, [searchNews]);

  return { articles, loading, error, searchNews };
};
