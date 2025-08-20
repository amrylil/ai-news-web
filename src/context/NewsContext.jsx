// src/context/NewsContext.jsx

import React, { createContext, useContext } from "react";
import { useNewsData } from "../hooks/useNewsData";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const { articles, loading, error } = useNewsData();

  const value = {
    articles,
    loading,
    error,
    // --- PERBAIKAN DI SINI ---
    getArticleById: (encodedId) => {
      // Sebelum mencari, kita decode dulu ID dari URL
      const decodedId = decodeURIComponent(encodedId);
      // Sekarang kita bandingkan ID yang sudah di-decode dengan ID di data kita
      return articles.find((article) => article.id === decodedId);
    },
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

export const useNews = () => {
  return useContext(NewsContext);
};
