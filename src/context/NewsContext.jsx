import React, { createContext, useContext } from "react";
import { useNewsData } from "../hooks/useNewsData";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const { articles, loading, error } = useNewsData();

  const value = {
    articles,
    loading,
    error,
    getArticleById: (encodedId) => {
      const decodedId = decodeURIComponent(encodedId);
      return articles.find((article) => article.id === decodedId);
    },
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

export const useNews = () => {
  return useContext(NewsContext);
};
