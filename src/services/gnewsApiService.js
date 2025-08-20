const GNEWS_KEY = "ffe477bc4f1230e981c93697aeb167cc";

const normalizeGNews = (articles = []) => {
  return articles.map((article) => ({
    id: article.url,
    title: article.title,
    url: article.url,
    image: article.urlToImage,
    timestamp: article.publishedAt,
    source: `GNews`,
  }));
};

export const fetchFromGNews = async (keyword) => {
  try {
    const response = await fetch(
      `https://gnews.io/api/v4/search?q=${keyword}&lang=en&token=${GNEWS_KEY}`
    );
    const data = await response.json();
    console.log("gnews api : ", data);
    if (data.errors) throw new Error(data.errors.join(", "));
    return normalizeGNews(data.articles);
  } catch (error) {
    console.error("Error fetching from GNews:", error);
    return [];
  }
};
