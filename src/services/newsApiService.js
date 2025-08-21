const NEWSAPI_KEY = import.meta.env.VITE_NEWSAPI_KEY;

const normalizeNewsAPI = (articles = []) => {
  return articles.map((article) => ({
    id: article.url,
    title: article.title,
    url: article.url,
    image: article.urlToImage,
    timestamp: article.publishedAt,
    source: `NewsAPI`,
  }));
};

export const fetchFromNewsAPI = async (keyword) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${NEWSAPI_KEY}`
    );
    const data = await response.json();
    if (data.status !== "ok") throw new Error(data.message);
    return normalizeNewsAPI(data.articles);
  } catch (error) {
    console.error("Error fetching from NewsAPI:", error);
    return [];
  }
};
