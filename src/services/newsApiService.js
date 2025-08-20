const NEWSAPI_KEY = "571f3604c7ec46518bbe9ec021e6d468";

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
    console.log("news api : ", data);
    if (data.status !== "ok") throw new Error(data.message);
    return normalizeNewsAPI(data.articles);
  } catch (error) {
    console.error("Error fetching from NewsAPI:", error);
    return [];
  }
};
