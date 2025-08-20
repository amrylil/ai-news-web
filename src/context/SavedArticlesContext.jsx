import React, { createContext, useContext, useState, useEffect } from "react";

const SavedArticlesContext = createContext();

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

export const SavedArticlesProvider = ({ children }) => {
  const [savedArticles, setSavedArticles] = useLocalStorage("savedNews", []);

  const addArticle = (article) => {
    if (!savedArticles.some((a) => a.id === article.id)) {
      setSavedArticles([...savedArticles, article]);
    }
  };

  const removeArticle = (articleId) => {
    setSavedArticles(savedArticles.filter((a) => a.id !== articleId));
  };

  const isSaved = (articleId) => {
    return savedArticles.some((a) => a.id === articleId);
  };

  const value = {
    savedArticles,
    addArticle,
    removeArticle,
    isSaved,
  };

  return (
    <SavedArticlesContext.Provider value={value}>
      {children}
    </SavedArticlesContext.Provider>
  );
};

export const useSaved = () => {
  return useContext(SavedArticlesContext);
};
