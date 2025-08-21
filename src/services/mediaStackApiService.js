const MEDIASTACK_KEY = import.meta.env.VITE_MEDIASTACK_KEY;

const normalizeMediastack = (articles = []) => {
  return articles.map((article) => ({
    id: article.url,
    title: article.title,
    url: article.url,
    image: article.image,
    timestamp: article.published_at,
    source: "Media Stack",
  }));
};

export const fetchFromMediastack = async (keyword) => {
  try {
    if (!MEDIASTACK_KEY) {
      throw new Error("Mediastack API key is missing from .env file.");
    }

    const response = await fetch(
      `http://api.mediastack.com/v1/news?access_key=${MEDIASTACK_KEY}&keywords=${keyword}&limit=20&languages=en`
    );
    const data = await response.json();
    console.log("media stack: ", data);

    if (data.error) throw new Error(data.error.message);

    return normalizeMediastack(data.data);
  } catch (error) {
    console.error("Error fetching from Mediastack:", error);
    return [];
  }
};
